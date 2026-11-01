# Account verification
Source: 174ca5e08512bb1a0d3d8e92ae6eda55232c67c8
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 others are away; resume offer survives a stale room
ok 163 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 3.466875
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 164 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 3.927611
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 165 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 4.849192
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 166 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 6.879169
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 167 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 11.769786
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 168 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 17.521387
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 169 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.526568
  ...
# Subtest: progress: levels and achievements
ok 170 - progress: levels and achievements
  ---
  duration_ms: 19.905684
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 171 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.686374
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 172 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.41929
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 173 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 20.502095
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 174 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.983932
  ...
# Subtest: source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
ok 175 - source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
  ---
  duration_ms: 3.739032
  ...
# Subtest: section title bar sticks to the top in the app too
ok 176 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.474057
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 177 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 103.116792
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 178 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 84.437161
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 179 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.704466
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 180 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.5952
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 181 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.571223
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 182 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.727775
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 183 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.282275
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 184 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 2.39275
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 185 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.791155
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 186 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.349782
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 187 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.31156
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 188 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 16.915797
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 189 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 11.730029
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 190 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.843214
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 191 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.532485
  ...
1..191
# tests 191
# suites 0
# pass 171
# fail 0
# cancelled 0
# skipped 20
# todo 0
# duration_ms 3530.695322

```
## build
```text

BUILD SUCCESSFUL in 1m 21s
33 actionable tasks: 33 executed
```
