# Account verification
Source: 9377cd5290339ea8106eeb8b70f303b63606dfd1
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 before host can start
  ---
  duration_ms: 3.89784
  ...
# Subtest: room header: cups game with friends displays рейтинговая игра under room
ok 101 - room header: cups game with friends displays рейтинговая игра under room
  ---
  duration_ms: 2.52787
  ...
# Subtest: android workflow: announces update in telegram and pushes via FCM
ok 102 - android workflow: announces update in telegram and pushes via FCM
  ---
  duration_ms: 0.276055
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 103 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.200014
  ...
# Subtest: source guard: concurrent announcements serialized
ok 104 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.141002
  ...
# Subtest: source guard: permission and disabled channel checked
ok 105 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.129315
  ...
# Subtest: source guard: denied notification is not marked
ok 106 - source guard: denied notification is not marked
  ---
  duration_ms: 0.104076
  ...
# Subtest: owner panel in the game: only for admins
ok 107 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.36998
  ...
# Subtest: web/game.html: the game script parses
ok 108 - web/game.html: the game script parses
  ---
  duration_ms: 10.134596
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 109 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.229469
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 110 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1828.534696
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 111 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.237377
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 112 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.279505
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 113 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.791498
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 114 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 3.054264
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 115 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.520213
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 116 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 2.682926
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 117 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 8.594746
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 118 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.456927
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 119 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 1.838405
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 120 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.27556
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 121 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 9.61441
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 122 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.505068
  ...
# Subtest: progress: levels and achievements
ok 123 - progress: levels and achievements
  ---
  duration_ms: 8.741897
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 124 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.53373
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 125 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.270747
  ...
# Subtest: section title bar sticks to the top in the app too
ok 126 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.313255
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 127 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 72.664101
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 128 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 53.758102
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 129 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.83519
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 130 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.565624
  ...
1..130
# tests 130
# suites 0
# pass 112
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3084.890723

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
