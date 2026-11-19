// Tommy's v3 web app (18 Nov 2026; Luke: "Yes, web app first"): install to the home screen and phone notifications,
// shared by the client page (index.html) and Tommy's dashboard (coach.html). The Mac sends the notifications
// (sync/src/fitcoach/push.py); this file only signs the phone up. No message text ever goes through a notification.
window.HMFApp = (function () {
  var PUBLIC_KEY = "BI234uoE9aC4RKMpbygd-bBFmCHNIIAyPaktDADycUh6SHo3NDKCP3hsnL7Xxg9xeQWUJmKa00cflhP6iNKsNYY";  // the Mac's Web Push public key: safe to publish
  var DAY = 86400000, reg = null, installEvent = null, onRefresh = null;
  var ua = navigator.userAgent || "";
  var ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  function standalone() { return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true; }
  function supported() { return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; }
  function key() {
    var b = PUBLIC_KEY.replace(/-/g, "+").replace(/_/g, "/"), s = atob(b + "===".slice((b.length + 3) % 4)), out = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
    return out;
  }
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // "on", "off", "denied", "ios-install" (an iPhone has to add it to the home screen first) or "unsupported".
  function state() {
    if (ios && !standalone()) return "ios-install";
    if (!supported()) return "unsupported";
    if (Notification.permission === "denied") return "denied";
    return Notification.permission === "granted" && get("hmf-push-on") === "1" ? "on" : "off";
  }
  function ready() {
    if (!("serviceWorker" in navigator)) return Promise.reject(new Error("no service worker"));
    return reg ? Promise.resolve(reg) : navigator.serviceWorker.register("sw.js").then(function (r) { reg = r; return navigator.serviceWorker.ready; });
  }
  // Ask for permission, sign the phone up, and hand the sign-up to `save` (a function that posts it to the script).
  function enable(save) {
    return Notification.requestPermission().then(function (p) {
      if (p !== "granted") throw new Error(p === "denied" ? "denied" : "dismissed");
      return ready();
    }).then(function (r) {
      return r.pushManager.getSubscription().then(function (s) { return s || r.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: key() }); });
    }).then(function (sub) {
      return save(JSON.stringify(sub)).then(function (reply) {
        if (!reply || !reply.ok) throw new Error((reply && reply.error) || "not saved");
        set("hmf-push-on", "1"); set("hmf-push-at", String(Date.now()));
      });
    });
  }
  // Once a day, send the sign-up again (a phone's sign-up can change), quietly.
  function refresh(save) {
    if (state() !== "on" || Date.now() - Number(get("hmf-push-at") || 0) < DAY) return;
    ready().then(function (r) { return r.pushManager.getSubscription(); }).then(function (sub) {
      if (!sub) { set("hmf-push-on", "0"); return; }
      return save(JSON.stringify(sub)).then(function (reply) { if (reply && reply.ok) set("hmf-push-at", String(Date.now())); });
    }).catch(function () {});
  }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); installEvent = e; if (onRefresh) onRefresh("install"); });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", function (e) { if (e.data && e.data.type === "refresh" && onRefresh) onRefresh("push"); });
    ready().catch(function () {});
  }

  // The "Get notified" box, built with the page's own h(). who: "client" or "coach". save posts the sign-up.
  // fresh: false when this page's link was set after it loaded (a client who just sent the form). iOS saves the
  // address the page loaded with, so it needs a reload first or the home screen copy opens at the start (Luke, 18 Nov).
  function box(h, who, save, rerender, fresh) {
    var st = state(), msg = null;
    var what = who === "coach" ? "a client messages you" : "Coach Tommy messages you or sends a new plan";
    var kids = [h("h2", { text: "NOTIFICATIONS" })];
    if (st === "on") kids.push(h("p", { class: "note", style: "margin:0", text: "On. This phone gets a notification when " + what + "." }));
    else if (st === "ios-install") kids.push(
      h("p", { style: "margin:0 0 8px", text: "Get a notification when " + what + "." }),
      h("ol", { style: "margin:0;padding-left:20px;line-height:1.6" }, [
        fresh === false ? h("li", { text: "Reload this page first: pull it down from the top and let go." }) : null,
        h("li", { text: "Tap the Share button (the square with an arrow) at the bottom of Safari." }),
        h("li", { text: "Tap “Add to Home Screen”, then Add." }),
        h("li", { text: "Open it from your home screen, and turn on notifications here." })]),
      h("p", { class: "note", style: "margin:8px 0 0", text: "Needs iOS 16.4 or newer." }));
    else if (st === "unsupported") kids.push(h("p", { class: "note", style: "margin:0", text: "This browser can't show notifications. On an iPhone, open this link in Safari; on Android, in Chrome." }));
    else if (st === "denied") kids.push(h("p", { class: "note", style: "margin:0", text: "Notifications are blocked for this page. Turn them on in your phone's settings for this app or site, then come back." }));
    else {
      var btn = h("button", { type: "button", class: "btn solid", text: "Turn on notifications", onclick: function () {
        btn.disabled = true; btn.textContent = "Turning on…";
        enable(save).then(rerender).catch(function (e) {
          btn.disabled = false; btn.textContent = "Turn on notifications";
          msg.textContent = e && e.message === "denied" ? "Notifications are blocked. Turn them on in your phone's settings, then try again." : "That didn't work. Please try again.";
          msg.hidden = false;
        });
      } });
      msg = h("div", { class: "err", hidden: true });
      kids.push(h("p", { style: "margin:0 0 10px", text: "Get a notification when " + what + ". It just says there's something new; the message stays here." }), btn, msg);
    }
    if (installEvent && !standalone()) kids.push(h("button", { type: "button", class: "btn", style: "margin-top:10px", text: "Add to home screen",
      onclick: function () { installEvent.prompt(); installEvent = null; } }));
    return h("div", { class: "win" }, kids);
  }
  return { state: state, standalone: standalone, enable: enable, refresh: refresh, box: box, ios: ios,
           onRefresh: function (fn) { onRefresh = fn; } };
})();
