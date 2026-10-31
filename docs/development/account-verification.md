# Account verification
Source: a793018ccb4a399a96bd08436e85b58ce0790992
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 session from the module, with no second copy
ok 90 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.226753
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 91 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.955788
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 92 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.629133
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 93 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.866963
  ...
# Subtest: rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
ok 94 - rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
  ---
  duration_ms: 4.732897
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 95 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 5.916535
  ...
# Subtest: source guard: concurrent announcements serialized
ok 96 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.281905
  ...
# Subtest: source guard: permission and disabled channel checked
ok 97 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.34829
  ...
# Subtest: source guard: denied notification is not marked
ok 98 - source guard: denied notification is not marked
  ---
  duration_ms: 0.264433
  ...
# Subtest: owner panel in the game: only for admins
ok 99 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.493941
  ...
# Subtest: web/game.html: the game script parses
ok 100 - web/game.html: the game script parses
  ---
  duration_ms: 16.253815
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 101 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.923693
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 102 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1379.720678
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 103 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.287778
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 104 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.543264
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 105 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.781357
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 106 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 5.231046
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 107 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.809783
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 108 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 13.509205
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 109 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 19.335323
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 110 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 6.99341
  ...
# Subtest: progress: levels and achievements
ok 111 - progress: levels and achievements
  ---
  duration_ms: 15.566233
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 112 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.128974
  ...
# Subtest: section title bar sticks to the top in the app too
ok 113 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 6.048113
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 114 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 81.065685
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 115 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 78.640664
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 116 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.505966
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 117 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.981153
  ...
1..117
# tests 117
# suites 0
# pass 99
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 3143.474052

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
