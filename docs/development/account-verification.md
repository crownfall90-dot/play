# Account verification
Source: 0c594cefde7f5a24156cadeafab730e2daf89021
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
a error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1263.224491
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 44 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 4.34146
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 45 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.700255
  ...
# Subtest: existing browser entry still selects Google web button
ok 46 - existing browser entry still selects Google web button
  ---
  duration_ms: 0.954498
  ...
# Subtest: all inline JavaScript compiles
ok 47 - all inline JavaScript compiles
  ---
  duration_ms: 4.776936
  ...
# Subtest: impossible tiles use finite silent scan
ok 48 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.283537
  ...
# Subtest: finished marker is bounded and idempotent
ok 49 - finished marker is bounded and idempotent
  ---
  duration_ms: 8.906616
  ...
# Subtest: finished saved game is rejected and removed
ok 50 - finished saved game is rejected and removed
  ---
  duration_ms: 0.737741
  ...
# Subtest: active save is blocked in terminal phase
ok 51 - active save is blocked in terminal phase
  ---
  duration_ms: 0.579042
  ...
# Subtest: history replaces preliminary row with final row
ok 52 - history replaces preliminary row with final row
  ---
  duration_ms: 0.697141
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 53 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.175364
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 54 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.113651
  ...
# Subtest: duplicate start message has an explicit guard
ok 55 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.254563
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 56 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.218749
  ...
# Subtest: return from background routes terminal game home
ok 57 - return from background routes terminal game home
  ---
  duration_ms: 0.334464
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 58 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.282456
  ...
# Subtest: test source does not contain secret material
ok 59 - test source does not contain secret material
  ---
  duration_ms: 0.208984
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 60 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 1.358336
  ...
# Subtest: active legacy save remains compatible without localId
ok 61 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.65723
  ...
# Subtest: invalid saved structure is rejected
ok 62 - invalid saved structure is rejected
  ---
  duration_ms: 1.363865
  ...
# Subtest: late final scoring cannot pay out into another game
ok 63 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.191379
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 64 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.241144
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 65 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.138178
  ...
# Subtest: historic placement skips the puff effect
ok 66 - historic placement skips the puff effect
  ---
  duration_ms: 0.176786
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 67 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.697971
  ...
# Subtest: source guard: concurrent announcements serialized
ok 68 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.091158
  ...
# Subtest: source guard: permission and disabled channel checked
ok 69 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.088753
  ...
# Subtest: source guard: denied notification is not marked
ok 70 - source guard: denied notification is not marked
  ---
  duration_ms: 0.063956
  ...
# Subtest: web/game.html: the game script parses
ok 71 - web/game.html: the game script parses
  ---
  duration_ms: 8.731662
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 72 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1284.185776
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 73 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.187512
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 74 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 1.85847
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 75 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 6.223043
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 76 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 8.820156
  ...
# Subtest: progress: levels and achievements
ok 77 - progress: levels and achievements
  ---
  duration_ms: 7.495
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 78 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.102757
  ...
1..78
# tests 78
# suites 0
# pass 77
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1574.567416

```
## build
```text

BUILD SUCCESSFUL in 1m 4s
33 actionable tasks: 33 executed
```
