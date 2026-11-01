# Account verification
Source: 567bb8cefc9f68b831e07c59a13afd18a47cb9c4
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
path uses diagnostics without persisting tokens (source check)
ok 134 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.200608
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 135 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.004195
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 136 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.111453
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 137 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 2.302528
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 138 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.414277
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 139 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 2.145565
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 140 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 6.259999
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 141 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.378914
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 142 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 1.486183
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 143 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 0.920039
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 144 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 1.822313
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 145 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 2.90233
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 146 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 5.962296
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 147 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.55622
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 148 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.089641
  ...
# Subtest: progress: levels and achievements
ok 149 - progress: levels and achievements
  ---
  duration_ms: 6.533146
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 150 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.072135
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 151 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.238505
  ...
# Subtest: section title bar sticks to the top in the app too
ok 152 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.879149
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 153 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 42.368325
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 154 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 39.35473
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 155 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.996173
  ...
# Subtest: ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
ok 156 - ui/feedback: formatFeedbackPayload formats categories, stars, and device diagnostics
  ---
  duration_ms: 0.871788
  ...
# Subtest: ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
ok 157 - ui/feedback: renderFeedbackCardHtml renders categories, star rating and hero
  ---
  duration_ms: 0.198676
  ...
# Subtest: ui/owner: devGet and devSet handle native preferences bridge and storage
ok 158 - ui/owner: devGet and devSet handle native preferences bridge and storage
  ---
  duration_ms: 0.170534
  ...
# Subtest: ui/owner: formatDevStatus formats workflow run status and dates
ok 159 - ui/owner: formatDevStatus formats workflow run status and dates
  ---
  duration_ms: 9.133518
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 160 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 5.806635
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 161 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 1.216482
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 162 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.953349
  ...
1..162
# tests 162
# suites 0
# pass 144
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3354.726055

```
## build
```text

BUILD SUCCESSFUL in 1m 3s
33 actionable tasks: 33 executed
```
