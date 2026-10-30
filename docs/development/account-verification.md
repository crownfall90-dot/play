# Account verification
Source: c39b2746a50487f2e493935aea38f77f7302cbbc
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ge separates title and complete explanation
  ---
  duration_ms: 1.501779
  ...
# Subtest: plain text and angle brackets are not stripped
ok 17 - plain text and angle brackets are not stripped
  ---
  duration_ms: 0.310789
  ...
# Subtest: unexpected markup is never interpreted as rich content
ok 18 - unexpected markup is never interpreted as rich content
  ---
  duration_ms: 0.181959
  ...
# Subtest: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 19 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 1.582128
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 20 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 4.985048
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 21 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1768.683087
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 22 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 7.383286
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 23 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.401732
  ...
# Subtest: existing browser entry still selects Google web button
ok 24 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.675612
  ...
# Subtest: all inline JavaScript compiles
ok 25 - all inline JavaScript compiles
  ---
  duration_ms: 8.962819
  ...
# Subtest: impossible tiles use finite silent scan
ok 26 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.552149
  ...
# Subtest: placement probe stops on first legal rotation
ok 27 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.294813
  ...
# Subtest: finished marker is bounded and idempotent
ok 28 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.403616
  ...
# Subtest: finished saved game is rejected and removed
ok 29 - finished saved game is rejected and removed
  ---
  duration_ms: 1.158779
  ...
# Subtest: active save is blocked in terminal phase
ok 30 - active save is blocked in terminal phase
  ---
  duration_ms: 0.979154
  ...
# Subtest: history replaces preliminary row with final row
ok 31 - history replaces preliminary row with final row
  ---
  duration_ms: 1.103816
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 32 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.38079
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 33 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.383404
  ...
# Subtest: duplicate start message has an explicit guard
ok 34 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.476378
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 35 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.403161
  ...
# Subtest: return from background routes terminal game home
ok 36 - return from background routes terminal game home
  ---
  duration_ms: 0.180817
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 37 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.426865
  ...
# Subtest: test source does not contain secret material
ok 38 - test source does not contain secret material
  ---
  duration_ms: 0.43984
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 39 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.369825
  ...
# Subtest: active legacy save remains compatible without localId
ok 40 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.22382
  ...
# Subtest: invalid saved structure is rejected
ok 41 - invalid saved structure is rejected
  ---
  duration_ms: 2.905363
  ...
# Subtest: late final scoring cannot pay out into another game
ok 42 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.752633
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 43 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.539355
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 44 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.694253
  ...
# Subtest: historic placement skips the puff effect
ok 45 - historic placement skips the puff effect
  ---
  duration_ms: 0.195053
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 46 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.595392
  ...
# Subtest: source guard: concurrent announcements serialized
ok 47 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.200143
  ...
# Subtest: source guard: permission and disabled channel checked
ok 48 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.20372
  ...
# Subtest: source guard: denied notification is not marked
ok 49 - source guard: denied notification is not marked
  ---
  duration_ms: 0.155981
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 50 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1874.370292
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 51 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.357055
  ...
1..51
# tests 51
# suites 0
# pass 51
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 2130.150726

```
## build
```text

BUILD SUCCESSFUL in 1m 20s
33 actionable tasks: 33 executed
```
