# Account verification
Source: 1374ad074422aa604cccd3d17ebfc1ca8f8cecbc
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
sage separates title and complete explanation
  ---
  duration_ms: 1.416652
  ...
# Subtest: plain text and angle brackets are not stripped
ok 14 - plain text and angle brackets are not stripped
  ---
  duration_ms: 0.354666
  ...
# Subtest: unexpected markup is never interpreted as rich content
ok 15 - unexpected markup is never interpreted as rich content
  ---
  duration_ms: 0.187658
  ...
# Subtest: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 16 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 1.700012
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 17 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.390452
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 18 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 2649.78806
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 19 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 8.60296
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 20 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.080122
  ...
# Subtest: existing browser entry still selects Google web button
ok 21 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.626493
  ...
# Subtest: all inline JavaScript compiles
ok 22 - all inline JavaScript compiles
  ---
  duration_ms: 7.470686
  ...
# Subtest: impossible tiles use finite silent scan
ok 23 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.486782
  ...
# Subtest: placement probe stops on first legal rotation
ok 24 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.913133
  ...
# Subtest: finished marker is bounded and idempotent
ok 25 - finished marker is bounded and idempotent
  ---
  duration_ms: 11.736629
  ...
# Subtest: finished saved game is rejected and removed
ok 26 - finished saved game is rejected and removed
  ---
  duration_ms: 1.013103
  ...
# Subtest: active save is blocked in terminal phase
ok 27 - active save is blocked in terminal phase
  ---
  duration_ms: 0.822941
  ...
# Subtest: history replaces preliminary row with final row
ok 28 - history replaces preliminary row with final row
  ---
  duration_ms: 0.859886
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 29 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.246336
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 30 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.293275
  ...
# Subtest: duplicate start message has an explicit guard
ok 31 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.33019
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 32 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.28967
  ...
# Subtest: return from background routes terminal game home
ok 33 - return from background routes terminal game home
  ---
  duration_ms: 0.137313
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 34 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.367866
  ...
# Subtest: test source does not contain secret material
ok 35 - test source does not contain secret material
  ---
  duration_ms: 0.414826
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 36 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.014228
  ...
# Subtest: active legacy save remains compatible without localId
ok 37 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.969148
  ...
# Subtest: invalid saved structure is rejected
ok 38 - invalid saved structure is rejected
  ---
  duration_ms: 2.122929
  ...
# Subtest: late final scoring cannot pay out into another game
ok 39 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.38401
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 40 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.420884
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 41 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.342327
  ...
# Subtest: historic placement skips the puff effect
ok 42 - historic placement skips the puff effect
  ---
  duration_ms: 0.155291
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 43 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.117377
  ...
# Subtest: source guard: concurrent announcements serialized
ok 44 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.138074
  ...
# Subtest: source guard: permission and disabled channel checked
ok 45 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.20228
  ...
# Subtest: source guard: denied notification is not marked
ok 46 - source guard: denied notification is not marked
  ---
  duration_ms: 0.106147
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 47 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2718.222717
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 48 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.286425
  ...
1..48
# tests 48
# suites 0
# pass 48
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 2914.784202

```
## build
```text

BUILD SUCCESSFUL in 1m 6s
33 actionable tasks: 33 executed
```
