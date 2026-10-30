# Account verification
Source: 9f86cba35b7f178eb98a3929baf348e150832ea9
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
age separates title and complete explanation
  ---
  duration_ms: 2.110467
  ...
# Subtest: plain text and angle brackets are not stripped
ok 12 - plain text and angle brackets are not stripped
  ---
  duration_ms: 0.532822
  ...
# Subtest: unexpected markup is never interpreted as rich content
ok 13 - unexpected markup is never interpreted as rich content
  ---
  duration_ms: 0.299758
  ...
# Subtest: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 14 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 2.263101
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 15 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 2.274783
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 16 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 2459.7997
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 17 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 7.656276
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 18 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.931012
  ...
# Subtest: existing browser entry still selects Google web button
ok 19 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.04247
  ...
# Subtest: all inline JavaScript compiles
ok 20 - all inline JavaScript compiles
  ---
  duration_ms: 13.64574
  ...
# Subtest: impossible tiles use finite silent scan
ok 21 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.690765
  ...
# Subtest: placement probe stops on first legal rotation
ok 22 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.155671
  ...
# Subtest: finished marker is bounded and idempotent
ok 23 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.420484
  ...
# Subtest: finished saved game is rejected and removed
ok 24 - finished saved game is rejected and removed
  ---
  duration_ms: 1.200474
  ...
# Subtest: active save is blocked in terminal phase
ok 25 - active save is blocked in terminal phase
  ---
  duration_ms: 1.004619
  ...
# Subtest: history replaces preliminary row with final row
ok 26 - history replaces preliminary row with final row
  ---
  duration_ms: 1.068117
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 27 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.31725
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 28 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.345694
  ...
# Subtest: duplicate start message has an explicit guard
ok 29 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.502775
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 30 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.351244
  ...
# Subtest: return from background routes terminal game home
ok 31 - return from background routes terminal game home
  ---
  duration_ms: 0.177901
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 32 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.525538
  ...
# Subtest: test source does not contain secret material
ok 33 - test source does not contain secret material
  ---
  duration_ms: 0.509378
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 34 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.298496
  ...
# Subtest: active legacy save remains compatible without localId
ok 35 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.226873
  ...
# Subtest: invalid saved structure is rejected
ok 36 - invalid saved structure is rejected
  ---
  duration_ms: 2.914663
  ...
# Subtest: late final scoring cannot pay out into another game
ok 37 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.746118
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 38 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.547198
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 39 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.681017
  ...
# Subtest: historic placement skips the puff effect
ok 40 - historic placement skips the puff effect
  ---
  duration_ms: 0.18277
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 41 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.253162
  ...
# Subtest: source guard: concurrent announcements serialized
ok 42 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.224377
  ...
# Subtest: source guard: permission and disabled channel checked
ok 43 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.323511
  ...
# Subtest: source guard: denied notification is not marked
ok 44 - source guard: denied notification is not marked
  ---
  duration_ms: 0.216372
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 45 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2552.792794
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 46 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.296462
  ...
1..46
# tests 46
# suites 0
# pass 46
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 2807.476303

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
