# Account verification
Source: fc72f7bd277b8c4f82b08dc8ff17951075b6c24e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text

# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 155 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.979803
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 156 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 4.784774
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 157 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 17.216181
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 158 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.824254
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 159 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 3.641948
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 160 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 2.272359
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 161 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 4.737137
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 162 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 4.886925
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 163 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 15.054939
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 164 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 14.352855
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 165 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.280406
  ...
# Subtest: progress: levels and achievements
ok 166 - progress: levels and achievements
  ---
  duration_ms: 18.412511
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 167 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.768378
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 168 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.453665
  ...
# Subtest: section title bar sticks to the top in the app too
ok 169 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.451693
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 170 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 89.279175
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 171 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 80.289499
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 172 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.833684
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 173 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 4.631269
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 174 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.55906
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 175 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.685015
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 176 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.292714
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 177 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.525297
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 178 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 2.107963
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 179 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.449417
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 180 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.475235
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 181 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 25.069418
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 182 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 14.858814
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 183 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.796826
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 184 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.152446
  ...
1..184
# tests 184
# suites 0
# pass 166
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3421.507416

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
