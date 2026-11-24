// Hero Made Fit's instant rank check (24 Nov 2026). A copy of the app's own scoring, so the page gives the same
// rank the app would: sync/src/fitcoach/norms.py (the numbers below are exported from it), stats.place,
// stats.rank_for_stat, demo.score and webform.top_line. Everything runs in the visitor's browser; nothing is sent.
// Checked against the Python with sync/tests/test_rank_js.py. If norms.py changes, re-export NORMS and rerun it.
(function (root) {
  const NORMS = {"bands":[[18,24],[25,34],[35,44],[45,54],[55,64],[65,120]],"pushups":{"male":{"18-24":[24,33,42,52,67,100],"25-34":[20,30,40,50,65,100],"35-44":[16,25,33,42,55,85],"45-54":[12,20,27,35,47,75],"55-64":[10,17,23,30,41,65],"65+":[6,11,16,22,31,50]},"female":{"18-24":[8,14,20,26,36,60],"25-34":[7,13,19,25,34,58],"35-44":[5,11,16,22,30,52],"45-54":[3,8,13,19,27,46],"55-64":[2,7,11,16,23,40],"65+":[1,4,8,12,18,32]}},"pullups":{"male":{"18-24":[5,9,14,19,26,42],"25-34":[4,8,13,18,25,40],"35-44":[3,6,11,15,22,36],"45-54":[1.5,4,8,12,18,30],"55-64":[0.5,2,6,9,14,25],"65+":[0.5,1.5,3,6,10,20]},"female":{"18-24":[0.5,1.5,3,6,11,22],"25-34":[0.5,1.5,3,5,10,20],"35-44":[0.5,1,2,4,8,17],"45-54":[0.3,0.7,1.5,3,6,14],"55-64":[0.3,0.6,1,2,5,11],"65+":[0.2,0.4,0.8,1.5,3,8]}},"age_grade":{"open_standard_s":{"1_mile":{"male":227,"female":253},"5k":{"male":769,"female":834}},"factor":{"1_mile":{"male":{"18-24":1.0,"25-34":1.0,"35-44":0.9358,"45-54":0.8664,"55-64":0.797,"65+":0.7196},"female":{"18-24":1.0,"25-34":1.0,"35-44":0.9797,"45-54":0.9082,"55-64":0.8111,"65+":0.7043}},"5k":{"male":{"18-24":1.0,"25-34":1.0,"35-44":0.9545,"45-54":0.8845,"55-64":0.8145,"65+":0.7353},"female":{"18-24":1.0,"25-34":0.9977,"35-44":0.9568,"45-54":0.8689,"55-64":0.7718,"65+":0.665}}},"anchors":[40,50,60,70,80,90]}};
  const PERCENTILES = [50, 75, 90, 97, 99.5, 99.99];
  const STAT_AT = [20, 40, 60, 75, 90, 100];
  const RANK_BANDS = [[0, 'E'], [20, 'D'], [40, 'C'], [60, 'B'], [75, 'A'], [90, 'S'], [100, 'National Level']];

  // Python's round(): halves go to the even number.
  function pyRound(x) {
    const f = Math.floor(x), d = x - f;
    if (Math.abs(d - 0.5) < 1e-9) return f % 2 === 0 ? f : f + 1;
    return Math.round(x);
  }
  function band(age) {
    for (const [lo, hi] of NORMS.bands) if (lo <= age && age <= hi) return hi < 120 ? lo + '-' + hi : lo + '+';
    return '18-24';
  }
  function bandLabel(sex, age) { return (sex === 'male' ? 'men' : 'women') + ' ' + band(age).replace('-', '–'); }
  function rankForStat(value) {
    let rank = 'E';
    for (const [floor, name] of RANK_BANDS) if (value >= floor) rank = name;
    return rank;
  }
  function place(value, anchors) {
    const lower = anchors[0] > anchors[anchors.length - 1];
    const v = lower ? -value : value, a = lower ? anchors.map(x => -x) : anchors;
    if (v <= a[0]) {
      let floor = a[0] - (a[1] - a[0]) * 2;
      if (!lower) floor = Math.max(0, floor);
      const frac = Math.max(0, (v - floor) / (a[0] - floor));
      return pyRound(frac * 20);
    }
    for (let i = 1; i < a.length; i++) {
      if (v <= a[i]) {
        const frac = (v - a[i - 1]) / (a[i] - a[i - 1]);
        return pyRound(STAT_AT[i - 1] + frac * (STAT_AT[i] - STAT_AT[i - 1]));
      }
    }
    return pyRound(100 + (v - a[a.length - 1]) / (a[a.length - 1] - a[a.length - 2]) * 10);
  }
  // 'Top 22% of men aged 25–34', or null below the median (feedback about the task, not the person).
  function topLine(value, sex, age) {
    if (value < STAT_AT[0]) return null;
    let pct = PERCENTILES[PERCENTILES.length - 1];
    for (let i = 1; i < STAT_AT.length; i++) {
      if (value <= STAT_AT[i]) {
        const frac = (value - STAT_AT[i - 1]) / (STAT_AT[i] - STAT_AT[i - 1]);
        pct = PERCENTILES[i - 1] + frac * (PERCENTILES[i] - PERCENTILES[i - 1]);
        break;
      }
    }
    const top = 100 - pct;
    const shown = top >= 1 ? String(Math.max(1, pyRound(top))) : String(Math.max(0.1, Math.round(top * 10) / 10));
    const [who, grp] = bandLabel(sex, age).split(' ');
    return 'Top ' + shown + '% of ' + who + ' aged ' + grp;
  }
  // a = {sex: 'male'|'female', age, pushups?, pullups?, run?: {distance: '1_mile'|'5k', seconds}}
  function score(a) {
    const b = band(a.age), strength = [], endurance = [];
    if (a.pushups != null) strength.push(place(a.pushups, NORMS.pushups[a.sex][b]));
    if (a.pullups != null) strength.push(place(a.pullups, NORMS.pullups[a.sex][b]));
    if (a.run) {
      const g = NORMS.age_grade, standard = g.open_standard_s[a.run.distance][a.sex] / g.factor[a.run.distance][a.sex][b];
      endurance.push(place(standard / a.run.seconds * 100, g.anchors));
    }
    const stat = (key, name, parts) => {
      if (!parts.length) return null;
      const value = Math.max(1, pyRound(parts.reduce((s, x) => s + x, 0) / parts.length));
      return { key, name, value, rank: rankForStat(value), top: topLine(value, a.sex, a.age) };
    };
    const stats = [stat('STR', 'Strength', strength), stat('END', 'Endurance', endurance)].filter(Boolean);
    const power = stats.length ? pyRound(stats.reduce((s, x) => s + x.value, 0) / stats.length) : 1;
    const avg = stats.length ? stats.reduce((s, x) => s + x.value, 0) / stats.length : 0;
    const top = stats.length > 1 ? topLine(avg, a.sex, a.age) : (stats[0] ? stats[0].top : null);
    const next = RANK_BANDS.find(([floor]) => floor > power);
    return { stats, power, rank: rankForStat(power), top, group: bandLabel(a.sex, a.age),
             next: next ? { rank: next[1], power: next[0] } : null };
  }
  function mmss(s) { s = Math.round(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  // Ways to reach the next rank, tried through score() itself: a mix (a little better at every test given, with
  // the same effort scale as the app's next-point targets, demo._tries) and any single test that gets there alone.
  function nextSteps(a) {
    const now = score(a);
    if (!now.next) return { mix: null, single: [] };
    const reaches = b => score(b).power >= now.next.power, single = [];
    const run = a.run ? (a.run.distance === '5k' ? '5K' : 'mile') : null;
    if (a.pushups != null) for (let n = a.pushups + 1; n <= a.pushups + 80; n++)
      if (reaches({ ...a, pushups: n })) { single.push(n + ' push-ups in a row (you said ' + a.pushups + ')'); break; }
    if (a.pullups != null) for (let n = a.pullups + 1; n <= a.pullups + 40; n++)
      if (reaches({ ...a, pullups: n })) { single.push(n + ' strict pull-up' + (n > 1 ? 's' : '') + ' (you said ' + a.pullups + ')'); break; }
    if (a.run) for (let cut = 1; cut < a.run.seconds * 0.4; cut++)
      if (reaches({ ...a, run: { ...a.run, seconds: a.run.seconds - cut } })) {
        single.push('A ' + mmss(a.run.seconds - cut) + ' ' + run + ' (you said ' + mmss(a.run.seconds) + ')'); break;
      }
    let mix = null;
    const given = (a.pushups != null) + (a.pullups != null) + (a.run ? 1 : 0);
    if (given > 1) for (let k = 0.02; k <= 3; k += 0.02) {
      const b = { ...a }, parts = [];
      if (a.pushups != null) { b.pushups = a.pushups + Math.max(1, Math.ceil(k * Math.max(a.pushups, 5))); parts.push(b.pushups + ' push-ups'); }
      if (a.pullups != null) { b.pullups = a.pullups + Math.max(1, Math.ceil(k * Math.max(a.pullups, 3))); parts.push(b.pullups + ' pull-ups'); }
      if (a.run) { b.run = { ...a.run, seconds: Math.round(a.run.seconds * (1 - k / 3)) }; parts.push('a ' + mmss(b.run.seconds) + ' ' + run); }
      if (reaches(b)) { mix = parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1]; break; }
    }
    return { mix, single };
  }
  const api = { score, nextSteps, band, bandLabel, mmss };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.HeroRank = api;
})(typeof window !== 'undefined' ? window : this);
