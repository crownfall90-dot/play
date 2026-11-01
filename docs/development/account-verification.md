# Account verification
Source: 0d6be26a011829a505d64352618fb906af9f29af
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
9, classic ≈ 15, big ≈ 30 minutes)
ok 173 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.05835
  ...
# Subtest: progress: levels and achievements
ok 174 - progress: levels and achievements
  ---
  duration_ms: 18.836999
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 175 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.528817
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 176 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.380348
  ...
# Subtest: state/save: gameKey correctly formats online and local IDs
ok 177 - state/save: gameKey correctly formats online and local IDs
  ---
  duration_ms: 1.673192
  ...
# Subtest: state/save: markGameFinished and isGameFinished track completed matches
ok 178 - state/save: markGameFinished and isGameFinished track completed matches
  ---
  duration_ms: 0.535367
  ...
# Subtest: state/save: saveActiveGame, loadActiveGame, and clearActiveGame handle local state
ok 179 - state/save: saveActiveGame, loadActiveGame, and clearActiveGame handle local state
  ---
  duration_ms: 1.230935
  ...
# Subtest: state/save: getLastOnline validates timestamp freshness
ok 180 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.426884
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 181 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 3.485421
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 182 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 16.852821
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 183 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.974096
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 184 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.180321
  ...
# Subtest: section title bar sticks to the top in the app too
ok 185 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.99449
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 186 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 95.771598
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 187 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 76.96456
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 188 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.282485
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 189 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.935836
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 190 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.517801
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 191 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.613398
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 192 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.266983
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 193 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.464976
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 194 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.842212
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 195 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.403562
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 196 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.426905
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 197 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 20.514388
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 198 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.881472
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 199 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.481998
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 200 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 13.77681
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 201 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.229447
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 202 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.312601
  ...
1..202
# tests 202
# suites 0
# pass 179
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 3175.118398

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
