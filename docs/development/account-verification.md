# Account verification
Source: c6628990f28fb7bc3cc1882704be1ddbd7cb9066
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ound routes terminal game home
ok 71 - return from background routes terminal game home
  ---
  duration_ms: 0.251729
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 72 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.512995
  ...
# Subtest: test source does not contain secret material
ok 73 - test source does not contain secret material
  ---
  duration_ms: 0.42944
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 74 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 3.012301
  ...
# Subtest: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.35248
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 3.200351
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.406868
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.490864
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.239867
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.316811
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 16.41645
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.109567
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.83251
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.990631
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.44848
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 86 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.66474
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 87 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.181304
  ...
# Subtest: source guard: concurrent announcements serialized
ok 88 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.22001
  ...
# Subtest: source guard: permission and disabled channel checked
ok 89 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.276926
  ...
# Subtest: source guard: denied notification is not marked
ok 90 - source guard: denied notification is not marked
  ---
  duration_ms: 0.251548
  ...
# Subtest: web/game.html: the game script parses
ok 91 - web/game.html: the game script parses
  ---
  duration_ms: 11.279801
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 92 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 3.437543
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 93 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1652.763011
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 94 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.29525
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 95 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.891371
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 96 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.449141
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 97 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.293379
  ...
# Subtest: progress: levels and achievements
ok 98 - progress: levels and achievements
  ---
  duration_ms: 10.284657
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 99 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.352104
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 100 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.738288
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 101 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.916662
  ...
1..101
# tests 101
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 12
# todo 0
# duration_ms 2472.354068

```
## build
```text

BUILD SUCCESSFUL in 1m 21s
33 actionable tasks: 33 executed
```
