# Account verification
Source: c6d345520d1376e7a3f3a4f374498906ec87ba77
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ate/save: getLastOnline validates timestamp freshness
ok 182 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.234647
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 183 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 1.907671
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 184 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 11.280482
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 185 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.622761
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 186 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.150994
  ...
# Subtest: section title bar sticks to the top in the app too
ok 187 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.775336
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 188 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 50.027984
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 189 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 47.029469
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 190 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.301445
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 191 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.124653
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 192 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.309137
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 193 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.366422
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 194 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.137864
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 195 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.285022
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 196 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.269086
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 197 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.186806
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 198 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.141009
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 199 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.215358
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 200 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.039237
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 201 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.278472
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 202 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.228268
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 203 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 13.681673
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 204 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.644231
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 205 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.384348
  ...
# Subtest: ui/setup: profileName and hero meta
ok 206 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.375346
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 207 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.283189
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 208 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.573238
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 209 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 14.976773
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 210 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 4.037841
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 211 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.587177
  ...
1..211
# tests 211
# suites 0
# pass 188
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 4000.217961

```
## build
```text

BUILD SUCCESSFUL in 1m 6s
33 actionable tasks: 33 executed
```
