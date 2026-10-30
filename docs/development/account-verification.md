# Account verification
Source: ee4cc2267fc4ea054db976e46f2f1df846eed0ba
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 ---
  duration_ms: 15.220496
  ...
# Subtest: game.html takes rng and hash from the bundle, not its own copy
ok 25 - game.html takes rng and hash from the bundle, not its own copy
  ---
  duration_ms: 2.824545
  ...
# Subtest: golden games: replays end exactly as recorded
ok 26 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.19352
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 27 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 4.773841
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 28 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.405255
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 29 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 3095.198888
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 30 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 7.656475
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 31 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.382902
  ...
# Subtest: existing browser entry still selects Google web button
ok 32 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.490573
  ...
# Subtest: all inline JavaScript compiles
ok 33 - all inline JavaScript compiles
  ---
  duration_ms: 8.620227
  ...
# Subtest: impossible tiles use finite silent scan
ok 34 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.428397
  ...
# Subtest: placement probe stops on first legal rotation
ok 35 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.323983
  ...
# Subtest: finished marker is bounded and idempotent
ok 36 - finished marker is bounded and idempotent
  ---
  duration_ms: 15.731965
  ...
# Subtest: finished saved game is rejected and removed
ok 37 - finished saved game is rejected and removed
  ---
  duration_ms: 1.12905
  ...
# Subtest: active save is blocked in terminal phase
ok 38 - active save is blocked in terminal phase
  ---
  duration_ms: 0.960497
  ...
# Subtest: history replaces preliminary row with final row
ok 39 - history replaces preliminary row with final row
  ---
  duration_ms: 1.05881
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 40 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.366332
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 41 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.358126
  ...
# Subtest: duplicate start message has an explicit guard
ok 42 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.388372
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 43 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.386059
  ...
# Subtest: return from background routes terminal game home
ok 44 - return from background routes terminal game home
  ---
  duration_ms: 0.172821
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 45 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.333972
  ...
# Subtest: test source does not contain secret material
ok 46 - test source does not contain secret material
  ---
  duration_ms: 0.399754
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 47 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.197809
  ...
# Subtest: active legacy save remains compatible without localId
ok 48 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.273168
  ...
# Subtest: invalid saved structure is rejected
ok 49 - invalid saved structure is rejected
  ---
  duration_ms: 2.846546
  ...
# Subtest: late final scoring cannot pay out into another game
ok 50 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.742892
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 51 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.558819
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 52 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.698098
  ...
# Subtest: historic placement skips the puff effect
ok 53 - historic placement skips the puff effect
  ---
  duration_ms: 0.184593
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 54 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.290931
  ...
# Subtest: source guard: concurrent announcements serialized
ok 55 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.150931
  ...
# Subtest: source guard: permission and disabled channel checked
ok 56 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.206875
  ...
# Subtest: source guard: denied notification is not marked
ok 57 - source guard: denied notification is not marked
  ---
  duration_ms: 0.146322
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 58 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3189.120588
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 59 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.28502
  ...
1..59
# tests 59
# suites 0
# pass 58
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 3465.313637

```
## build
```text

BUILD SUCCESSFUL in 1m 20s
33 actionable tasks: 33 executed
```
