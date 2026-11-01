# Account verification
Source: d600a12de112910918d6fab67c95adb7bb104100
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
st can start
  ---
  duration_ms: 9.909072
  ...
# Subtest: room header: cups game with friends displays рейтинговая игра under room
ok 113 - room header: cups game with friends displays рейтинговая игра under room
  ---
  duration_ms: 6.313073
  ...
# Subtest: android workflow: announces update in telegram and pushes via FCM
ok 114 - android workflow: announces update in telegram and pushes via FCM
  ---
  duration_ms: 0.362205
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 115 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.814911
  ...
# Subtest: source guard: concurrent announcements serialized
ok 116 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.244155
  ...
# Subtest: source guard: permission and disabled channel checked
ok 117 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.235529
  ...
# Subtest: source guard: denied notification is not marked
ok 118 - source guard: denied notification is not marked
  ---
  duration_ms: 0.244405
  ...
# Subtest: owner panel in the game: only for admins
ok 119 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.151268
  ...
# Subtest: web/game.html: the game script parses
ok 120 - web/game.html: the game script parses
  ---
  duration_ms: 17.169469
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 121 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.450807
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 122 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1265.48015
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 123 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.340634
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 124 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.392608
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 125 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.832113
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 126 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 4.942088
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 127 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.851086
  ...
# Subtest: R-5: menu quest banner exists and is wired in game.html
ok 128 - R-5: menu quest banner exists and is wired in game.html
  ---
  duration_ms: 4.663138
  ...
# Subtest: R-12: streak freeze preserves streak on 1 missed day per week
ok 129 - R-12: streak freeze preserves streak on 1 missed day per week
  ---
  duration_ms: 19.996188
  ...
# Subtest: R-7: weekly quests and chest reward tracking
ok 130 - R-7: weekly quests and chest reward tracking
  ---
  duration_ms: 0.942666
  ...
# Subtest: R-8: rating friends scope filter and R-6 season tag
ok 131 - R-8: rating friends scope filter and R-6 season tag
  ---
  duration_ms: 3.857277
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 132 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 21.409557
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 133 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 19.015533
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 134 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 5.507992
  ...
# Subtest: progress: levels and achievements
ok 135 - progress: levels and achievements
  ---
  duration_ms: 18.139262
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 136 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 6.330791
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 137 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.471619
  ...
# Subtest: section title bar sticks to the top in the app too
ok 138 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.660157
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 139 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 92.004038
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 140 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 88.830117
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 141 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.497042
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 142 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.778807
  ...
1..142
# tests 142
# suites 0
# pass 124
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3493.961179

```
## build
```text

BUILD SUCCESSFUL in 1m 18s
33 actionable tasks: 33 executed
```
