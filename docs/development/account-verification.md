# Account verification
Source: d187db8a29cb35ea75d692adad8bcfea1e1acc53
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
test: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 19 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 2.211518
  ...
# Subtest: golden games: replays end exactly as recorded
ok 20 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.5081
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 21 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 5.006331
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 22 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.919705
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 23 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1202.517791
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 24 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 6.489904
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 25 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.462583
  ...
# Subtest: existing browser entry still selects Google web button
ok 26 - existing browser entry still selects Google web button
  ---
  duration_ms: 3.180082
  ...
# Subtest: all inline JavaScript compiles
ok 27 - all inline JavaScript compiles
  ---
  duration_ms: 10.013986
  ...
# Subtest: impossible tiles use finite silent scan
ok 28 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.538543
  ...
# Subtest: placement probe stops on first legal rotation
ok 29 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.265196
  ...
# Subtest: finished marker is bounded and idempotent
ok 30 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.918167
  ...
# Subtest: finished saved game is rejected and removed
ok 31 - finished saved game is rejected and removed
  ---
  duration_ms: 1.269894
  ...
# Subtest: active save is blocked in terminal phase
ok 32 - active save is blocked in terminal phase
  ---
  duration_ms: 1.038965
  ...
# Subtest: history replaces preliminary row with final row
ok 33 - history replaces preliminary row with final row
  ---
  duration_ms: 1.399285
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 34 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.332268
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 35 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.431463
  ...
# Subtest: duplicate start message has an explicit guard
ok 36 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.460698
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 37 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.522523
  ...
# Subtest: return from background routes terminal game home
ok 38 - return from background routes terminal game home
  ---
  duration_ms: 0.202867
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 39 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.493229
  ...
# Subtest: test source does not contain secret material
ok 40 - test source does not contain secret material
  ---
  duration_ms: 0.506624
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 41 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.472293
  ...
# Subtest: active legacy save remains compatible without localId
ok 42 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.405417
  ...
# Subtest: invalid saved structure is rejected
ok 43 - invalid saved structure is rejected
  ---
  duration_ms: 4.729228
  ...
# Subtest: late final scoring cannot pay out into another game
ok 44 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.758953
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 45 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.434689
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 46 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.420633
  ...
# Subtest: historic placement skips the puff effect
ok 47 - historic placement skips the puff effect
  ---
  duration_ms: 0.294639
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 48 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.371614
  ...
# Subtest: source guard: concurrent announcements serialized
ok 49 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.151102
  ...
# Subtest: source guard: permission and disabled channel checked
ok 50 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.171529
  ...
# Subtest: source guard: denied notification is not marked
ok 51 - source guard: denied notification is not marked
  ---
  duration_ms: 0.145331
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 52 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1395.585932
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 53 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.283077
  ...
1..53
# tests 53
# suites 0
# pass 52
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1664.794395

```
## build
```text

BUILD SUCCESSFUL in 1m 18s
33 actionable tasks: 33 executed
```
