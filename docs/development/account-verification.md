# Account verification
Source: 3fc1550292722b661569e8adf2d860eaf5a89f26
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 separates title and complete explanation
  ---
  duration_ms: 2.333041
  ...
# Subtest: plain text and angle brackets are not stripped
ok 8 - plain text and angle brackets are not stripped
  ---
  duration_ms: 0.417557
  ...
# Subtest: unexpected markup is never interpreted as rich content
ok 9 - unexpected markup is never interpreted as rich content
  ---
  duration_ms: 0.188121
  ...
# Subtest: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 10 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 1.597422
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 11 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.559341
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 12 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1146.469786
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 13 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 13.595523
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 14 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 2.275844
  ...
# Subtest: existing browser entry still selects Google web button
ok 15 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.298817
  ...
# Subtest: all inline JavaScript compiles
ok 16 - all inline JavaScript compiles
  ---
  duration_ms: 13.043165
  ...
# Subtest: impossible tiles use finite silent scan
ok 17 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.631595
  ...
# Subtest: placement probe stops on first legal rotation
ok 18 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.636614
  ...
# Subtest: finished marker is bounded and idempotent
ok 19 - finished marker is bounded and idempotent
  ---
  duration_ms: 22.501111
  ...
# Subtest: finished saved game is rejected and removed
ok 20 - finished saved game is rejected and removed
  ---
  duration_ms: 1.406006
  ...
# Subtest: active save is blocked in terminal phase
ok 21 - active save is blocked in terminal phase
  ---
  duration_ms: 1.07538
  ...
# Subtest: history replaces preliminary row with final row
ok 22 - history replaces preliminary row with final row
  ---
  duration_ms: 1.061686
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 23 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.321408
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 24 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.323321
  ...
# Subtest: duplicate start message has an explicit guard
ok 25 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.46225
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 26 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.329303
  ...
# Subtest: return from background routes terminal game home
ok 27 - return from background routes terminal game home
  ---
  duration_ms: 0.277196
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 28 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.510119
  ...
# Subtest: test source does not contain secret material
ok 29 - test source does not contain secret material
  ---
  duration_ms: 0.556285
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 30 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.924431
  ...
# Subtest: active legacy save remains compatible without localId
ok 31 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.544444
  ...
# Subtest: invalid saved structure is rejected
ok 32 - invalid saved structure is rejected
  ---
  duration_ms: 3.489953
  ...
# Subtest: late final scoring cannot pay out into another game
ok 33 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.727634
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 34 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.542849
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 35 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.651001
  ...
# Subtest: historic placement skips the puff effect
ok 36 - historic placement skips the puff effect
  ---
  duration_ms: 0.267839
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 37 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.926244
  ...
# Subtest: source guard: concurrent announcements serialized
ok 38 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.764853
  ...
# Subtest: source guard: permission and disabled channel checked
ok 39 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.233174
  ...
# Subtest: source guard: denied notification is not marked
ok 40 - source guard: denied notification is not marked
  ---
  duration_ms: 0.207416
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 41 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1345.995226
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 42 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.285211
  ...
1..42
# tests 42
# suites 0
# pass 42
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 1566.175484

```
## build
```text

BUILD SUCCESSFUL in 1m 25s
33 actionable tasks: 33 executed
```
