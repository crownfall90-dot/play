# Account verification
Source: caa661a617505285e72f11f3ee1686169c85fe4c
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
test: state/save: getLastOnline validates timestamp freshness
ok 181 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.26264
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 182 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 2.404875
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 183 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 24.995723
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 184 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.582907
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 185 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.118185
  ...
# Subtest: section title bar sticks to the top in the app too
ok 186 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.290268
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 187 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 61.958089
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 188 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 47.472243
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 189 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.439811
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 190 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 0.8134
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 191 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.22198
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 192 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.251614
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 193 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.089994
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 194 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.213447
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 195 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.510666
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 196 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.171374
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 197 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.136113
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 198 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.201039
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 199 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 0.717417
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 200 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.198505
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 201 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.155942
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 202 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 9.360068
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 203 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 0.767031
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 204 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.185526
  ...
# Subtest: ui/setup: profileName and hero meta
ok 205 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.225165
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 206 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.129272
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 207 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.239917
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 208 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 6.533755
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 209 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.21982
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 210 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.938986
  ...
1..210
# tests 210
# suites 0
# pass 187
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 2242.41609

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
