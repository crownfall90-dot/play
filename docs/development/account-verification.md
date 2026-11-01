# Account verification
Source: 93c2dc60a05288cf241d633175d619c41df949b0
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
n path uses diagnostics without persisting tokens (source check)
ok 131 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.253391
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 132 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.650858
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 133 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.608773
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 134 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 3.857417
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 135 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.588324
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 136 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 3.481419
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 137 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 9.417944
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 138 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.487603
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 139 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 2.667863
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 140 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.386613
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 141 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 3.077634
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 142 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 4.42644
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 143 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 8.344203
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 144 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 9.582529
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 145 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.637036
  ...
# Subtest: progress: levels and achievements
ok 146 - progress: levels and achievements
  ---
  duration_ms: 9.349652
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 147 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.712208
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 148 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.254631
  ...
# Subtest: section title bar sticks to the top in the app too
ok 149 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.35359
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 150 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 61.677956
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 151 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 50.381972
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 152 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.445104
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 153 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 1.17893
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 154 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.262139
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 155 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.299368
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 156 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 13.714128
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 157 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 9.129982
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 158 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 2.235
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 159 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.663952
  ...
1..159
# tests 159
# suites 0
# pass 141
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4431.799838

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
