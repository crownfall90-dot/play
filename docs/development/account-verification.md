# Account verification
Source: 175097db90fefd6f87ca1bcafd7e83c68fd6334e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
t: state/save: getLastOnline validates timestamp freshness
ok 180 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.221937
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 181 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 1.913
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 182 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 10.058616
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 183 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.546626
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 184 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.121949
  ...
# Subtest: section title bar sticks to the top in the app too
ok 185 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.22809
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 186 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 68.363054
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 187 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 50.159808
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 188 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.422847
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 189 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.145689
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 190 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.302306
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 191 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.409564
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 192 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.154618
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 193 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.288335
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 194 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.005923
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 195 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.155039
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 196 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.117173
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 197 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.184642
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 198 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.055877
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 199 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.249448
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 200 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.259312
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 201 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 12.286089
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 202 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.335799
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 203 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.265121
  ...
# Subtest: ui/setup: profileName and hero meta
ok 204 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.255557
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 205 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.225252
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 206 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.360601
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 207 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 9.380976
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 208 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.009866
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 209 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.483196
  ...
1..209
# tests 209
# suites 0
# pass 186
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 4162.111503

```
## build
```text

BUILD SUCCESSFUL in 1m 15s
33 actionable tasks: 33 executed
```
