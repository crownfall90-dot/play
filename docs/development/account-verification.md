# Account verification
Source: 5728d2c526dc14fa2d7e12d5e7f09fedaebdef83
Tests exit code: 0
Staging assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
: state/save: getLastOnline validates timestamp freshness
ok 189 - state/save: getLastOnline validates timestamp freshness
  ---
  duration_ms: 0.360442
  ...
# Subtest: state/save: saveHistoryEntry caps at 50 matches
ok 190 - state/save: saveHistoryEntry caps at 50 matches
  ---
  duration_ms: 2.042941
  ...
# Subtest: status module: clean, filter, buy, wear, earned
ok 191 - status module: clean, filter, buy, wear, earned
  ---
  duration_ms: 10.776518
  ...
# Subtest: screens: shop statuses and "my items" open without errors, buying puts the status on
ok 192 - screens: shop statuses and "my items" open without errors, buying puts the status on # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.520172
  ...
# Subtest: profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist
ok 193 - profile DOM: sign-out / auth action is inside profile card; rating scope buttons exist # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.10626
  ...
# Subtest: section title bar sticks to the top in the app too
ok 194 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.251682
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 195 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 60.527208
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 196 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 61.975085
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 197 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.424541
  ...
# Subtest: ui/hud: cityD generates SVG path data for corners and edges
ok 198 - ui/hud: cityD generates SVG path data for corners and edges
  ---
  duration_ms: 1.203579
  ...
# Subtest: ui/hud: ownSvg generates data-URI for claimed features
ok 199 - ui/hud: ownSvg generates data-URI for claimed features
  ---
  duration_ms: 0.314452
  ...
# Subtest: ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
ok 200 - ui/hud: renderPlayersListHtml renders player elements with turn badges and scores
  ---
  duration_ms: 0.39305
  ...
# Subtest: ui/results: winTitle produces appropriate win title
ok 201 - ui/results: winTitle produces appropriate win title
  ---
  duration_ms: 0.138829
  ...
# Subtest: ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
ok 202 - ui/results: renderPodiumHtml and renderBreakdownTableHtml format podium and scores
  ---
  duration_ms: 0.284397
  ...
# Subtest: ui/menu: formatGameMenuHtml formats offline pause menu
ok 203 - ui/menu: formatGameMenuHtml formats offline pause menu
  ---
  duration_ms: 1.158932
  ...
# Subtest: ui/menu: formatGameMenuHtml formats online game menu with resign & draw
ok 204 - ui/menu: formatGameMenuHtml formats online game menu with resign & draw
  ---
  duration_ms: 0.167692
  ...
# Subtest: ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
ok 205 - ui/menu: formatGameMenuHtml formats menu when all humans left and only bots remain
  ---
  duration_ms: 0.142334
  ...
# Subtest: ui/menu: areAllOpponentsAway checks opponent drop status
ok 206 - ui/menu: areAllOpponentsAway checks opponent drop status
  ---
  duration_ms: 0.216786
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 207 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.037089
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 208 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.263916
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 209 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.218578
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 210 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 14.482884
  ...
# Subtest: ui/setup: renderModeCardsHtml renders cards with labels and icons
ok 211 - ui/setup: renderModeCardsHtml renders cards with labels and icons
  ---
  duration_ms: 1.025241
  ...
# Subtest: ui/setup: renderRuleRowsHtml filters rules and marks active options
ok 212 - ui/setup: renderRuleRowsHtml filters rules and marks active options
  ---
  duration_ms: 0.25261
  ...
# Subtest: ui/setup: profileName and hero meta
ok 213 - ui/setup: profileName and hero meta
  ---
  duration_ms: 0.224448
  ...
# Subtest: ui/setup: adjustSeatsForMode switches between local players and bots
ok 214 - ui/setup: adjustSeatsForMode switches between local players and bots
  ---
  duration_ms: 0.154472
  ...
# Subtest: ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
ok 215 - ui/setup: renderSwatchesHtml, renderSetupMeHtml and renderSetupSeatsHtml
  ---
  duration_ms: 0.31928
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 216 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 16.396505
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 217 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.017196
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 218 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.385743
  ...
1..218
# tests 218
# suites 0
# pass 195
# fail 0
# cancelled 0
# skipped 23
# todo 0
# duration_ms 2234.712394

```
## build
```text

BUILD SUCCESSFUL in 1m 6s
35 actionable tasks: 35 executed
```
