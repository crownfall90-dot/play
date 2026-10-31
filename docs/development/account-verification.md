# Account verification
Source: 17b1a964c5341a2cfbeebeb5194729d05c562897
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ore host can start
  ---
  duration_ms: 4.579258
  ...
# Subtest: room header: cups game with friends displays рейтинговая игра under room
ok 107 - room header: cups game with friends displays рейтинговая игра under room
  ---
  duration_ms: 3.434583
  ...
# Subtest: android workflow: announces update in telegram and pushes via FCM
ok 108 - android workflow: announces update in telegram and pushes via FCM
  ---
  duration_ms: 0.447372
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 109 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.970917
  ...
# Subtest: source guard: concurrent announcements serialized
ok 110 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.117494
  ...
# Subtest: source guard: permission and disabled channel checked
ok 111 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.139987
  ...
# Subtest: source guard: denied notification is not marked
ok 112 - source guard: denied notification is not marked
  ---
  duration_ms: 0.105036
  ...
# Subtest: owner panel in the game: only for admins
ok 113 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.652356
  ...
# Subtest: web/game.html: the game script parses
ok 114 - web/game.html: the game script parses
  ---
  duration_ms: 9.497498
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 115 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.571777
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 116 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3184.568748
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 117 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.223601
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 118 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.239054
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 119 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.655991
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 120 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 2.787236
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 121 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.548472
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 122 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 2.780856
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 123 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 7.936758
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 124 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.429175
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 125 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 1.833965
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 126 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 7.139328
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 127 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 8.294797
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 128 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.266775
  ...
# Subtest: progress: levels and achievements
ok 129 - progress: levels and achievements
  ---
  duration_ms: 8.231774
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 130 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.373573
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 131 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.251843
  ...
# Subtest: section title bar sticks to the top in the app too
ok 132 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.1621
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 133 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 50.140975
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 134 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 44.588868
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 135 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.218834
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 136 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.268178
  ...
1..136
# tests 136
# suites 0
# pass 118
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4455.113966

```
## build
```text

BUILD SUCCESSFUL in 1m 5s
33 actionable tasks: 33 executed
```
