# Account verification
Source: c2362ede3e721ace578623660054e5c7b2e5a0e5
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ay; resume offer survives a stale room
ok 167 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 2.551451
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 168 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.634009
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 169 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 3.061442
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 170 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 6.057131
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 171 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 12.745822
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 172 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 16.149119
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 173 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.88056
  ...
# Subtest: progress: levels and achievements
ok 174 - progress: levels and achievements
  ---
  duration_ms: 13.930802
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 175 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.471387
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 176 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.440752
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 177 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 16.086101
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 178 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.544031
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 179 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.233095
  ...
# Subtest: section title bar sticks to the top in the app too
ok 180 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.044354
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 181 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 64.128685
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 182 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 72.936691
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 183 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.833207
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 184 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.505114
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 185 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.572638
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 186 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.82009
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 187 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.271206
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 188 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.601222
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 189 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 2.271348
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 190 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.468885
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 191 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.470968
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 192 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 25.009865
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 193 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 22.469417
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 194 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 4.931011
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 195 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.746334
  ...
1..195
# tests 195
# suites 0
# pass 172
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 4860.871912

```
## build
```text

BUILD SUCCESSFUL in 1m 21s
33 actionable tasks: 33 executed
```
