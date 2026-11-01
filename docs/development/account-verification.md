# Account verification
Source: 3f7b175f7a74a05c648f047f2ed54c5f2dd7a2cd
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
disabled channel checked
  ---
  duration_ms: 0.171605
  ...
# Subtest: source guard: denied notification is not marked
ok 126 - source guard: denied notification is not marked
  ---
  duration_ms: 0.142241
  ...
# Subtest: owner panel in the game: only for admins
ok 127 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.592409
  ...
# Subtest: web/game.html: the game script parses
ok 128 - web/game.html: the game script parses
  ---
  duration_ms: 13.107267
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 129 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.594653
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 130 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1262.578605
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 131 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.305254
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 132 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.613938
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 133 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 6.562752
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 134 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 4.95464
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 135 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.965836
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 136 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 5.029271
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 137 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 14.812153
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 138 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.910844
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 139 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 3.511243
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 140 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 2.187484
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 141 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 4.716616
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 142 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 17.826677
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 143 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 18.21067
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 144 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 5.310229
  ...
# Subtest: progress: levels and achievements
ok 145 - progress: levels and achievements
  ---
  duration_ms: 17.340174
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 146 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 6.982316
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 147 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.454636
  ...
# Subtest: section title bar sticks to the top in the app too
ok 148 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.19148
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 149 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 88.969392
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 150 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 84.597479
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 151 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.388793
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 152 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 12.089243
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 153 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 3.881053
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 154 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.686338
  ...
1..154
# tests 154
# suites 0
# pass 136
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3325.54672

```
## build
```text

BUILD SUCCESSFUL in 1m 25s
33 actionable tasks: 33 executed
```
