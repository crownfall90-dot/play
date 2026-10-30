# Account verification
Source: ef59037321f570f2b72e78cfd98c8305773bc31e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
test: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 23 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 2.44373
  ...
# Subtest: golden games: replays end exactly as recorded
ok 24 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.817837
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 25 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 5.377724
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 26 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 2.056238
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 27 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1822.825006
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 28 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 9.443695
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 29 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.097594
  ...
# Subtest: existing browser entry still selects Google web button
ok 30 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.489053
  ...
# Subtest: all inline JavaScript compiles
ok 31 - all inline JavaScript compiles
  ---
  duration_ms: 9.617628
  ...
# Subtest: impossible tiles use finite silent scan
ok 32 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.575882
  ...
# Subtest: placement probe stops on first legal rotation
ok 33 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.215664
  ...
# Subtest: finished marker is bounded and idempotent
ok 34 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.164834
  ...
# Subtest: finished saved game is rejected and removed
ok 35 - finished saved game is rejected and removed
  ---
  duration_ms: 1.242884
  ...
# Subtest: active save is blocked in terminal phase
ok 36 - active save is blocked in terminal phase
  ---
  duration_ms: 1.021873
  ...
# Subtest: history replaces preliminary row with final row
ok 37 - history replaces preliminary row with final row
  ---
  duration_ms: 1.145062
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 38 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.337739
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 39 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.346866
  ...
# Subtest: duplicate start message has an explicit guard
ok 40 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.459155
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 41 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.524807
  ...
# Subtest: return from background routes terminal game home
ok 42 - return from background routes terminal game home
  ---
  duration_ms: 0.232153
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 43 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.534635
  ...
# Subtest: test source does not contain secret material
ok 44 - test source does not contain secret material
  ---
  duration_ms: 0.537741
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 45 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.559876
  ...
# Subtest: active legacy save remains compatible without localId
ok 46 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.312354
  ...
# Subtest: invalid saved structure is rejected
ok 47 - invalid saved structure is rejected
  ---
  duration_ms: 3.038037
  ...
# Subtest: late final scoring cannot pay out into another game
ok 48 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.808486
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 49 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.595469
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 50 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.715202
  ...
# Subtest: historic placement skips the puff effect
ok 51 - historic placement skips the puff effect
  ---
  duration_ms: 0.197137
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 52 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.755617
  ...
# Subtest: source guard: concurrent announcements serialized
ok 53 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.233946
  ...
# Subtest: source guard: permission and disabled channel checked
ok 54 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.285151
  ...
# Subtest: source guard: denied notification is not marked
ok 55 - source guard: denied notification is not marked
  ---
  duration_ms: 0.222464
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 56 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1956.120495
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 57 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.293126
  ...
1..57
# tests 57
# suites 0
# pass 56
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 2242.824887

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
