# Account verification
Source: 173afbff56068a0c20e3abfd65b9b8146a363f9c
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1079.639382
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 46 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 5.29154
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 47 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.982312
  ...
# Subtest: existing browser entry still selects Google web button
ok 48 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.116009
  ...
# Subtest: all inline JavaScript compiles
ok 49 - all inline JavaScript compiles
  ---
  duration_ms: 7.143236
  ...
# Subtest: impossible tiles use finite silent scan
ok 50 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.409495
  ...
# Subtest: finished marker is bounded and idempotent
ok 51 - finished marker is bounded and idempotent
  ---
  duration_ms: 17.475245
  ...
# Subtest: finished saved game is rejected and removed
ok 52 - finished saved game is rejected and removed
  ---
  duration_ms: 1.193303
  ...
# Subtest: active save is blocked in terminal phase
ok 53 - active save is blocked in terminal phase
  ---
  duration_ms: 1.10967
  ...
# Subtest: history replaces preliminary row with final row
ok 54 - history replaces preliminary row with final row
  ---
  duration_ms: 1.162057
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 55 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.337578
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 56 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.245843
  ...
# Subtest: duplicate start message has an explicit guard
ok 57 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.461793
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 58 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.512077
  ...
# Subtest: return from background routes terminal game home
ok 59 - return from background routes terminal game home
  ---
  duration_ms: 0.210531
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 60 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.414553
  ...
# Subtest: test source does not contain secret material
ok 61 - test source does not contain secret material
  ---
  duration_ms: 2.894508
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 62 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.271808
  ...
# Subtest: active legacy save remains compatible without localId
ok 63 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.375653
  ...
# Subtest: invalid saved structure is rejected
ok 64 - invalid saved structure is rejected
  ---
  duration_ms: 2.357133
  ...
# Subtest: late final scoring cannot pay out into another game
ok 65 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.213335
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 66 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.341936
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 67 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.227717
  ...
# Subtest: historic placement skips the puff effect
ok 68 - historic placement skips the puff effect
  ---
  duration_ms: 0.237771
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 69 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.311218
  ...
# Subtest: source guard: concurrent announcements serialized
ok 70 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.140738
  ...
# Subtest: source guard: permission and disabled channel checked
ok 71 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.173827
  ...
# Subtest: source guard: denied notification is not marked
ok 72 - source guard: denied notification is not marked
  ---
  duration_ms: 0.167177
  ...
# Subtest: web/game.html: the game script parses
ok 73 - web/game.html: the game script parses
  ---
  duration_ms: 10.363776
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 74 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 969.024345
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 75 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.325891
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 76 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.222362
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 77 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.620227
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 78 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.342089
  ...
# Subtest: progress: levels and achievements
ok 79 - progress: levels and achievements
  ---
  duration_ms: 11.622957
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 80 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.840215
  ...
1..80
# tests 80
# suites 0
# pass 79
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1337.328415

```
## build
```text

BUILD SUCCESSFUL in 1m 8s
33 actionable tasks: 33 executed
```
