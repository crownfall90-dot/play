# Account verification
Source: 9e920924f3908aa9ef58d3011bc4161334d999bd
Tests exit code: 0
Staging assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
: state/save: getLastOnline validates timestamp freshness
ok 185 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.461158
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 186 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 3.449397
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 187 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 21.658264
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 188 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.132106
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 189 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.20965
  ...
# Subtest: section title bar sticks to the top in the app too
ok 190 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.805961
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 191 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 125.856087
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 192 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 86.271523
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 193 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.665589
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 194 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.49909
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 195 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.593013
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 196 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.727774
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 197 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.286804
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 198 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.596349
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 199 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 2.337558
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 200 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.294588
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 201 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.258922
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 202 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.345974
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 203 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 2.229768
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 204 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.51033
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 205 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.498247
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 206 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 28.293549
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 207 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.987858
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 208 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.477068
  ...
# Subtest: ui/setup: profileName and hero meta
ok 209 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.463712
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 210 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.364188
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 211 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.743904
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 212 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 18.80846
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 213 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 8.685779
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 214 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.888414
  ...
1..214
# tests 214
# suites 0
# pass 191
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 3883.49348

```
## build
```text

BUILD SUCCESSFUL in 1m 26s
35 actionable tasks: 35 executed
```
