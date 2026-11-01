# Account verification
Source: 7042095f323c780dabce59fc8cc4ef5ad301bc86
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
en the others are away; resume offer survives a stale room
ok 161 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 1.685774
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 162 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.016266
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 163 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 1.958257
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 164 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 3.245583
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 165 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 6.361221
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 166 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.053206
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 167 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.09623
  ...
# Subtest: progress: levels and achievements
ok 168 - progress: levels and achievements
  ---
  duration_ms: 8.227713
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 169 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.392662
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 170 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.335772
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 171 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 8.341291
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 172 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.442081
  ...
# Subtest: source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
ok 173 - source: rating "among friends" reads the real friends list; sign-out button is inside the profile card
  ---
  duration_ms: 1.622021
  ...
# Subtest: section title bar sticks to the top in the app too
ok 174 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.038117
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 175 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 43.411485
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 176 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 39.124681
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 177 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.129473
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 178 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 0.989708
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 179 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.255284
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 180 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.291051
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 181 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.10552
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 182 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.242373
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 183 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 0.91231
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 184 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.22975
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 185 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.213258
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 186 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 9.817875
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 187 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 6.797492
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 188 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 1.434532
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 189 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.118663
  ...
1..189
# tests 189
# suites 0
# pass 170
# fail 0
# cancelled 0
# skipped 19
# todo 0
# duration_ms 4405.456987

```
## build
```text

BUILD SUCCESSFUL in 59s
33 actionable tasks: 33 executed
```
