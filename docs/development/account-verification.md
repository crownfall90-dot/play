# Account verification
Source: 889a9ff19111abadbd482a1dd85bcf47464e0a30
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 in the game: only for admins
ok 127 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.354462
  ...
# Subtest: web/game.html: the game script parses
ok 128 - web/game.html: the game script parses
  ---
  duration_ms: 14.010792
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 129 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.200315
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 130 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2254.620249
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 131 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.228993
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 132 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.284289
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 133 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.276473
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 134 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 3.337956
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 135 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.514732
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 136 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 3.374927
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 137 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 7.929112
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 138 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.716188
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 139 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 2.443449
  ...
# Subtest: security audit: firebase rules contain promo_claims and secure testerPin
ok 140 - security audit: firebase rules contain promo_claims and secure testerPin
  ---
  duration_ms: 1.098422
  ...
# Subtest: security audit: game.html sanitizes remote seats, uid, and results board against XSS
ok 141 - security audit: game.html sanitizes remote seats, uid, and results board against XSS
  ---
  duration_ms: 2.924279
  ...
# Subtest: security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
ok 142 - security audit: redeemPromo handles 401 on promo_claims gracefully without crediting gold
  ---
  duration_ms: 3.868705
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 143 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.010212
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 144 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 8.572986
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 145 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.659701
  ...
# Subtest: progress: levels and achievements
ok 146 - progress: levels and achievements
  ---
  duration_ms: 13.630839
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 147 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.053109
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 148 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.323966
  ...
# Subtest: section title bar sticks to the top in the app too
ok 149 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.171673
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 150 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 48.734272
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 151 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 47.256783
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 152 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.254377
  ...
# Subtest: ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
ok 153 - ui/shop: renderGiftCard, renderFiguresGrid, renderFramesGrid, renderLocationsGrid
  ---
  duration_ms: 7.864469
  ...
# Subtest: ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
ok 154 - ui/progress: ringSvg, renderMasteryGrid, renderBuildingStats, renderCollectionCard
  ---
  duration_ms: 1.65579
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 155 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.254833
  ...
1..155
# tests 155
# suites 0
# pass 137
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3742.76679

```
## build
```text

BUILD SUCCESSFUL in 1m 18s
33 actionable tasks: 33 executed
```
