# Account verification
Source: d07a354fd73a62daacdfc4b4d1e1c5795448194e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
puff effect
ok 82 - historic placement skips the puff effect
  ---
  duration_ms: 0.3218
  ...
# Subtest: net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going
ok 83 - net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.576292
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 84 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 12.506477
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 85 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.064624
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 86 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.736763
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 87 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.518574
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 88 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.716159
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 89 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.801207
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 90 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.915159
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 91 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.450613
  ...
# Subtest: source guard: concurrent announcements serialized
ok 92 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.16096
  ...
# Subtest: source guard: permission and disabled channel checked
ok 93 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.168755
  ...
# Subtest: source guard: denied notification is not marked
ok 94 - source guard: denied notification is not marked
  ---
  duration_ms: 0.18762
  ...
# Subtest: owner panel in the game: only for admins
ok 95 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.755541
  ...
# Subtest: web/game.html: the game script parses
ok 96 - web/game.html: the game script parses
  ---
  duration_ms: 10.828019
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 97 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.054219
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 98 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2358.487484
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 99 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.280282
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 100 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.753388
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 101 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.341281
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 102 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.113647
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 103 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 11.823334
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 104 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 4.064755
  ...
# Subtest: progress: levels and achievements
ok 105 - progress: levels and achievements
  ---
  duration_ms: 11.409757
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 106 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.20336
  ...
# Subtest: section title bar sticks to the top in the app too
ok 107 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.850198
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 108 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.743519
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 109 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.808901
  ...
1..109
# tests 109
# suites 0
# pass 92
# fail 0
# cancelled 0
# skipped 17
# todo 0
# duration_ms 3244.311139

```
## build
```text

BUILD SUCCESSFUL in 1m 31s
33 actionable tasks: 33 executed
```
