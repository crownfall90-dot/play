# Account verification
Source: a7ef74651a0a3e8a45396cf06823f4b29a97361c
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
routes terminal game home
ok 70 - return from background routes terminal game home
  ---
  duration_ms: 0.229098
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 71 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.511601
  ...
# Subtest: test source does not contain secret material
ok 72 - test source does not contain secret material
  ---
  duration_ms: 0.441521
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 73 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 3.030929
  ...
# Subtest: active legacy save remains compatible without localId
ok 74 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.350716
  ...
# Subtest: invalid saved structure is rejected
ok 75 - invalid saved structure is rejected
  ---
  duration_ms: 2.257946
  ...
# Subtest: late final scoring cannot pay out into another game
ok 76 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.264208
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 77 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.428515
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 78 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.237934
  ...
# Subtest: historic placement skips the puff effect
ok 79 - historic placement skips the puff effect
  ---
  duration_ms: 0.243005
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 80 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 12.928661
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 81 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.890517
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 82 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.570238
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 83 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.012156
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 84 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.685974
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 85 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.647037
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 86 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.335385
  ...
# Subtest: source guard: concurrent announcements serialized
ok 87 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.157014
  ...
# Subtest: source guard: permission and disabled channel checked
ok 88 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.1702
  ...
# Subtest: source guard: denied notification is not marked
ok 89 - source guard: denied notification is not marked
  ---
  duration_ms: 0.146372
  ...
# Subtest: web/game.html: the game script parses
ok 90 - web/game.html: the game script parses
  ---
  duration_ms: 10.266045
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 91 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.696576
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 92 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2642.733657
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 93 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.280176
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 94 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.125346
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 95 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.017752
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 96 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.89358
  ...
# Subtest: progress: levels and achievements
ok 97 - progress: levels and achievements
  ---
  duration_ms: 11.217886
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 98 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.244636
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 99 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.730243
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 100 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.826855
  ...
1..100
# tests 100
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 11
# todo 0
# duration_ms 3370.598109

```
## build
```text

BUILD SUCCESSFUL in 1m 18s
33 actionable tasks: 33 executed
```
