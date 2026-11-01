# Account verification
Source: d2d4fa72e124ae53c4eed1949c8e32b64d6ae05d
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
etrics and cohort breakdown
  ---
  duration_ms: 0.613632
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 156 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 3.547611
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 157 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 10.453541
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 158 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.581853
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 159 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 2.334554
  ...
# Subtest: engine: rules v2 reinforcement and card tie-break
ok 160 - engine: rules v2 reinforcement and card tie-break
  ---
  duration_ms: 14.142885
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 161 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.576553
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 162 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 3.364921
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 163 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 5.028757
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 164 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 11.355728
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 165 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 11.098872
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 166 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.277879
  ...
# Subtest: progress: levels and achievements
ok 167 - progress: levels and achievements
  ---
  duration_ms: 15.223166
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 168 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.81586
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 169 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.28501
  ...
# Subtest: section title bar sticks to the top in the app too
ok 170 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.142466
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 171 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 69.70091
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 172 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 68.168899
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 173 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.838561
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 174 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.384978
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 175 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.533823
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 176 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.754053
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 177 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.332549
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 178 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.551185
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 179 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.413951
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 180 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.303815
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 181 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.336777
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 182 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 15.487487
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 183 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 16.012372
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 184 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.958945
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 185 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.869498
  ...
1..185
# tests 185
# suites 0
# pass 167
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4082.080531

```
## build
```text

BUILD SUCCESSFUL in 1m 20s
33 actionable tasks: 33 executed
```
