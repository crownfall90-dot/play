# Account verification
Source: fd37fa2ac0fbe6fa7fa318011c0902d4171d0ea7
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
t: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.823536
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 1.807084
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.216806
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.314492
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.174061
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.170866
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 6.651308
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.578469
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.334302
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.510388
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.86588
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 86 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.864388
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 87 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.343377
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 88 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.723287
  ...
# Subtest: source guard: concurrent announcements serialized
ok 89 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.087802
  ...
# Subtest: source guard: permission and disabled channel checked
ok 90 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.085418
  ...
# Subtest: source guard: denied notification is not marked
ok 91 - source guard: denied notification is not marked
  ---
  duration_ms: 0.063175
  ...
# Subtest: owner panel in the game: only for admins
ok 92 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.350979
  ...
# Subtest: web/game.html: the game script parses
ok 93 - web/game.html: the game script parses
  ---
  duration_ms: 8.785353
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 94 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.868354
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 95 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2548.986499
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 96 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.198268
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 97 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 1.888746
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 98 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 5.569654
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 99 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 5.792499
  ...
# Subtest: progress: levels and achievements
ok 100 - progress: levels and achievements
  ---
  duration_ms: 6.082444
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 101 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.000815
  ...
# Subtest: section title bar sticks to the top in the app too
ok 102 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.896807
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 103 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.954453
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 104 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.933742
  ...
1..104
# tests 104
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 15
# todo 0
# duration_ms 3050.054787

```
## build
```text

BUILD SUCCESSFUL in 1m 4s
33 actionable tasks: 33 executed
```
