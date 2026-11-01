# Account verification
Source: 22a11023b8084b7be954412733fcc109be8ee3c8
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 149 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.918629
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 150 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 3.320846
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 151 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 10.283016
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 152 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.529485
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 153 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 2.39254
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 154 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.691807
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 155 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 2.809726
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 156 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 4.116617
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 157 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.637886
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 158 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 13.953613
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 159 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.760785
  ...
# Subtest: progress: levels and achievements
ok 160 - progress: levels and achievements
  ---
  duration_ms: 12.605055
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 161 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.767477
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 162 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.308845
  ...
# Subtest: section title bar sticks to the top in the app too
ok 163 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.643157
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 164 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 71.256214
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 165 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 74.924574
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 166 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.782606
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 167 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.645891
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 168 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.417226
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 169 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.44612
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 170 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.222624
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 171 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.376801
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 172 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.400335
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 173 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.36051
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 174 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.340112
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 175 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 19.33362
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 176 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 15.62915
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 177 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.753401
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 178 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.759914
  ...
1..178
# tests 178
# suites 0
# pass 160
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4141.113647

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
