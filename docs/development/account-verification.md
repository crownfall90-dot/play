# Account verification
Source: 97bb376cccc40c6c09d90571ae770726dd88074e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
source check)
  ---
  duration_ms: 2.140352
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 43 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1589.371068
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 44 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 5.141737
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 45 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.375148
  ...
# Subtest: existing browser entry still selects Google web button
ok 46 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.52084
  ...
# Subtest: all inline JavaScript compiles
ok 47 - all inline JavaScript compiles
  ---
  duration_ms: 8.601335
  ...
# Subtest: impossible tiles use finite silent scan
ok 48 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.501213
  ...
# Subtest: finished marker is bounded and idempotent
ok 49 - finished marker is bounded and idempotent
  ---
  duration_ms: 15.096356
  ...
# Subtest: finished saved game is rejected and removed
ok 50 - finished saved game is rejected and removed
  ---
  duration_ms: 1.039955
  ...
# Subtest: active save is blocked in terminal phase
ok 51 - active save is blocked in terminal phase
  ---
  duration_ms: 0.909342
  ...
# Subtest: history replaces preliminary row with final row
ok 52 - history replaces preliminary row with final row
  ---
  duration_ms: 1.218778
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 53 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.373184
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 54 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.250305
  ...
# Subtest: duplicate start message has an explicit guard
ok 55 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.459675
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 56 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.452933
  ...
# Subtest: return from background routes terminal game home
ok 57 - return from background routes terminal game home
  ---
  duration_ms: 0.228966
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 58 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.496113
  ...
# Subtest: test source does not contain secret material
ok 59 - test source does not contain secret material
  ---
  duration_ms: 0.552508
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 60 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.697109
  ...
# Subtest: active legacy save remains compatible without localId
ok 61 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.933377
  ...
# Subtest: invalid saved structure is rejected
ok 62 - invalid saved structure is rejected
  ---
  duration_ms: 2.191497
  ...
# Subtest: late final scoring cannot pay out into another game
ok 63 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.263911
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 64 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.405414
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 65 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.233023
  ...
# Subtest: historic placement skips the puff effect
ok 66 - historic placement skips the puff effect
  ---
  duration_ms: 0.233284
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 67 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.216544
  ...
# Subtest: source guard: concurrent announcements serialized
ok 68 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.272467
  ...
# Subtest: source guard: permission and disabled channel checked
ok 69 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.269441
  ...
# Subtest: source guard: denied notification is not marked
ok 70 - source guard: denied notification is not marked
  ---
  duration_ms: 0.244184
  ...
# Subtest: web/game.html: the game script parses
ok 71 - web/game.html: the game script parses
  ---
  duration_ms: 12.261361
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 72 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1677.481724
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 73 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.414511
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 74 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.849844
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 75 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 12.817091
  ...
# Subtest: progress: levels and achievements
ok 76 - progress: levels and achievements
  ---
  duration_ms: 12.259612
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 77 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.717397
  ...
1..77
# tests 77
# suites 0
# pass 76
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 2140.490318

```
## build
```text

BUILD SUCCESSFUL in 1m 22s
33 actionable tasks: 33 executed
```
