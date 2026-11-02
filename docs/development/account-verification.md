# Account verification
Source: a19fcc92973149109c1fb631b13c429b3c2eed42
Tests exit code: 0
Staging assembleGithubRelease exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 state/save: getLastOnline validates timestamp freshness
ok 190 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.294316
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 191 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 5.405531
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 192 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 14.945549
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 193 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.710473
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 194 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.137885
  ...
# Subtest: section title bar sticks to the top in the app too
ok 195 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.926204
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 196 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 66.085097
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 197 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 59.7639
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 198 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.021556
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 199 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.324233
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 200 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.361385
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 201 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.549855
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 202 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.228188
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 203 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.402616
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 204 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.389539
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 205 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.180107
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 206 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.141009
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 207 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.221128
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 208 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.258865
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 209 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.291733
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 210 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.311672
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 211 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 14.246618
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 212 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.481395
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 213 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.347445
  ...
# Subtest: ui/setup: profileName and hero meta
ok 214 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.362707
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 215 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.26317
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 216 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.529975
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 217 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 10.613469
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 218 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.882111
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 219 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.829231
  ...
1..219
# tests 219
# suites 0
# pass 196
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 3060.135818

```
## build
```text

BUILD SUCCESSFUL in 1m 41s
46 actionable tasks: 46 executed
```
