# Account verification
Source: e43243938b164319fc9b4a803cdb03aae62c7ec5
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
12: streak freeze preserves streak on 1 missed day per week
ok 157 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 13.299847
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 158 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.895703
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 159 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 3.690342
  ...
# Subtest: engine: rules v2 reinforcement and card tie-break
ok 160 - engine: rules v2 reinforcement and card tie-break
  ---
  duration_ms: 16.614627
  ...
# Subtest: source: draw is accepted at once when the others are away; resume offer survives a stale room
ok 161 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 2.39333
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 162 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.781257
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 163 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 2.882383
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 164 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 6.802252
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 165 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.648628
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 166 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 16.989693
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 167 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.524593
  ...
# Subtest: progress: levels and achievements
ok 168 - progress: levels and achievements
  ---
  duration_ms: 18.870382
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 169 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.462794
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 170 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.438619
  ...
# Subtest: section title bar sticks to the top in the app too
ok 171 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.694394
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 172 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 75.827747
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 173 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 63.359669
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 174 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.788049
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 175 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.537611
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 176 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.371003
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 177 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.470899
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 178 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.189894
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 179 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.395038
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 180 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.421805
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 181 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.330477
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 182 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.305371
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 183 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 15.209443
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 184 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 17.719265
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 185 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.633768
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 186 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.90749
  ...
1..186
# tests 186
# suites 0
# pass 168
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4016.582885

```
## build
```text

BUILD SUCCESSFUL in 1m 35s
33 actionable tasks: 33 executed
```
