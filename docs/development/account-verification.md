# Account verification
Source: 5fbd1d788196a6e8c9171d7b8612eb812b58a5f1
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
others are away; resume offer survives a stale room
ok 164 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 2.35311
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 165 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.567982
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 166 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 3.254277
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 167 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 4.295875
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 168 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.61262
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 169 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 11.380887
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 170 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.690553
  ...
# Subtest: progress: levels and achievements
ok 171 - progress: levels and achievements
  ---
  duration_ms: 10.716504
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 172 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.048482
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 173 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.333614
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 174 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 12.968717
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 175 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.777524
  ...
# Subtest: source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
ok 176 - source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
  ---
  duration_ms: 2.392504
  ...
# Subtest: section title bar sticks to the top in the app too
ok 177 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.66318
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 178 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 72.984217
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 179 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 58.025749
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 180 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.092123
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 181 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.752958
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 182 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.378438
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 183 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.487361
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 184 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.188132
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 185 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.412812
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 186 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.483073
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 187 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.338252
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 188 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.321762
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 189 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 21.250857
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 190 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 11.400744
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 191 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.431338
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 192 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.290013
  ...
1..192
# tests 192
# suites 0
# pass 172
# fail 0
# cancelled 0
# skipped 20
# todo 0
# duration_ms 4543.558291

```
## build
```text

BUILD SUCCESSFUL in 1m 24s
33 actionable tasks: 33 executed
```
