# Account verification
Source: bd48f5dc7abe76dfc8bf67738bafcb6307488595
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
nd R-6 season tag
  ---
  duration_ms: 3.737736
  ...
# Subtest: engine: rules v2 reinforcement and card tie-break
ok 160 - engine: rules v2 reinforcement and card tie-break
  ---
  duration_ms: 21.935008
  ...
# Subtest: source: draw is accepted at once when the others are away; resume offer survives a stale room
ok 161 - source: draw is accepted at once when the others are away; resume offer survives a stale room
  ---
  duration_ms: 2.854423
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 162 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 2.021053
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 163 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 4.95755
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 164 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 8.511329
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 165 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 11.472797
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 166 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 16.740504
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 167 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.882399
  ...
# Subtest: progress: levels and achievements
ok 168 - progress: levels and achievements
  ---
  duration_ms: 21.812146
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 169 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.860588
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 170 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.5129
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 171 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 23.02577
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 172 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.037162
  ...
# Subtest: section title bar sticks to the top in the app too
ok 173 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.522672
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 174 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 90.679425
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 175 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 88.546713
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 176 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.596781
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 177 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.248839
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 178 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.541233
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 179 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.641451
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 180 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.295092
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 181 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.533609
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 182 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 2.359427
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 183 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.494676
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 184 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.533679
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 185 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 25.26413
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 186 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 13.272083
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 187 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.925927
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 188 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.256624
  ...
1..188
# tests 188
# suites 0
# pass 169
# fail 0
# cancelled 0
# skipped 19
# todo 0
# duration_ms 3465.459846

```
## build
```text

BUILD SUCCESSFUL in 1m 17s
33 actionable tasks: 33 executed
```
