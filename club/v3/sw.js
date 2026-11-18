// Tommy's v3 web app (18 Nov 2026): shows the phone notifications the Mac sends (sync/src/fitcoach/push.py) and opens
// the right page when one is tapped. It caches nothing, so the pages are always the live ones.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener("push", function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data ? e.data.text() : "" }; }
  e.waitUntil(self.registration.showNotification(d.title || "Coach Tommy", {
    body: d.body || "Something new is waiting for you.", tag: d.tag || undefined, renotify: !!d.tag,
    icon: "icon-192.png", badge: "icon-192.png", data: { url: d.url || "./" } }));
});

self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  var url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  var page = url.split("#")[0];
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
    // An open copy of the same page comes to the front and refreshes; otherwise a new one opens.
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.split("#")[0] === page && "focus" in list[i]) {
        list[i].postMessage({ type: "refresh" });
        return list[i].focus();
      }
    }
    return self.clients.openWindow(url);
  }));
});
