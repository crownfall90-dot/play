# Account verification
Source: d7a22fe5785caa44cc67c23a8a1e0e92e4e5360b
Tests exit code: 0
Staging assembleGithubRelease exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 state/save: getLastOnline validates timestamp freshness
ok 189 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.411075
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 190 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 4.045605
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 191 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 24.255645
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 192 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.915593
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 193 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.215951
  ...
# Subtest: section title bar sticks to the top in the app too
ok 194 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 5.83866
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 195 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 82.626331
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 196 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 74.04525
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 197 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 5.65613
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 198 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 2.050433
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 199 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.503556
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 200 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.625513
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 201 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.239696
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 202 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.512753
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 203 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 2.201013
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 204 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.266436
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 205 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 2.554742
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 206 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.326738
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 207 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 2.138828
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 208 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.557256
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 209 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.501002
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 210 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 46.669373
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 211 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.900134
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 212 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.454775
  ...
# Subtest: ui/setup: profileName and hero meta
ok 213 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.426122
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 214 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.366511
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 215 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.615305
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 216 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 16.211883
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 217 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 5.157993
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 218 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.955337
  ...
1..218
# tests 218
# suites 0
# pass 195
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 4217.820198

```
## build
```text

BUILD SUCCESSFUL in 1m 30s
46 actionable tasks: 46 executed
```
