# Account verification
Source: 6a27dff96c1bc2307fba758adccd7fa146050e92
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
/save: gameKey correctly formats online and local IDs
  ---
  duration_ms: 2.081567
  ...
# Subtest: state/save: markGameFinished and isGameFinished track completed matches
ok 178 - state/save: markGameFinished and isGameFinished track completed matches
  ---
  duration_ms: 0.656674
  ...
# Subtest: state/save: saveActiveGame, loadActiveGame, and clearActiveGame handle local state
ok 179 - state/save: saveActiveGame, loadActiveGame, and clearActiveGame handle local state
  ---
  duration_ms: 1.490847
  ...
# Subtest: state/save: getLastOnline validates timestamp freshness
ok 180 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.419932
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 181 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 3.758457
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 182 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 15.544441
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 183 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.073649
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 184 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.228556
  ...
# Subtest: section title bar sticks to the top in the app too
ok 185 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.444774
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 186 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 98.129589
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 187 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 85.270473
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 188 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.806226
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 189 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.489076
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 190 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.539565
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 191 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.718849
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 192 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.32257
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 193 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.620666
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 194 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 2.093458
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 195 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.284009
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 196 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.283298
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 197 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.379647
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 198 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.674278
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 199 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.292795
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 200 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.350613
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 201 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 20.120213
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 202 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 2.161266
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 203 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.513917
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 204 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 16.418909
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 205 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 9.870475
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 206 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.557123
  ...
1..206
# tests 206
# suites 0
# pass 183
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 3754.196561

```
## build
```text

BUILD SUCCESSFUL in 1m 28s
33 actionable tasks: 33 executed
```
