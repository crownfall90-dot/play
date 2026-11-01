# Account verification
Source: 03d95ee4e93bea1f21fbeba7d99a2dc52c663f8b
Tests exit code: 0
Staging assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
: state/save: getLastOnline validates timestamp freshness
ok 182 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.278308
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 183 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 2.312487
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 184 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 12.675747
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 185 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.651123
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 186 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.137516
  ...
# Subtest: section title bar sticks to the top in the app too
ok 187 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.373721
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 188 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 60.129327
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 189 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 54.480496
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 190 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.757674
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 191 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.550948
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 192 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.488469
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 193 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.580731
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 194 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.280793
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 195 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.60682
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 196 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.543986
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 197 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.292275
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 198 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.195044
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 199 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.368677
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 200 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.459789
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 201 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.37618
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 202 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.309396
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 203 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 18.923424
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 204 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 2.181543
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 205 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.543071
  ...
# Subtest: ui/setup: profileName and hero meta
ok 206 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.539164
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 207 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.381981
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 208 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.711014
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 209 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 11.651109
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 210 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.335923
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 211 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.84149
  ...
1..211
# tests 211
# suites 0
# pass 188
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 4785.90927

```
## build
```text

BUILD SUCCESSFUL in 1m 24s
35 actionable tasks: 35 executed
```
