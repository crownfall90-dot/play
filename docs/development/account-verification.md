# Account verification
Source: d3dbff8d468c2c4d00b2f4452310550a3cd97e6d
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ock helper prefers finishing its own town
  ---
  duration_ms: 4.106276
  ...
# Subtest: engine/tiles: card types and stack sizes per mode
ok 30 - engine/tiles: card types and stack sizes per mode
  ---
  duration_ms: 8.627826
  ...
# Subtest: golden games: replays end exactly as recorded
ok 31 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.214717
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 32 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 2.71692
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 33 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.340723
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 34 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 963.936137
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 35 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 4.149159
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 36 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.743951
  ...
# Subtest: existing browser entry still selects Google web button
ok 37 - existing browser entry still selects Google web button
  ---
  duration_ms: 0.872752
  ...
# Subtest: all inline JavaScript compiles
ok 38 - all inline JavaScript compiles
  ---
  duration_ms: 9.09654
  ...
# Subtest: impossible tiles use finite silent scan
ok 39 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.458699
  ...
# Subtest: finished marker is bounded and idempotent
ok 40 - finished marker is bounded and idempotent
  ---
  duration_ms: 16.239309
  ...
# Subtest: finished saved game is rejected and removed
ok 41 - finished saved game is rejected and removed
  ---
  duration_ms: 1.212684
  ...
# Subtest: active save is blocked in terminal phase
ok 42 - active save is blocked in terminal phase
  ---
  duration_ms: 1.089513
  ...
# Subtest: history replaces preliminary row with final row
ok 43 - history replaces preliminary row with final row
  ---
  duration_ms: 1.216721
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 44 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.367174
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 45 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.238172
  ...
# Subtest: duplicate start message has an explicit guard
ok 46 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.48684
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 47 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.515202
  ...
# Subtest: return from background routes terminal game home
ok 48 - return from background routes terminal game home
  ---
  duration_ms: 0.234246
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 49 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 2.809537
  ...
# Subtest: test source does not contain secret material
ok 50 - test source does not contain secret material
  ---
  duration_ms: 0.352662
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 51 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.532708
  ...
# Subtest: active legacy save remains compatible without localId
ok 52 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.129532
  ...
# Subtest: invalid saved structure is rejected
ok 53 - invalid saved structure is rejected
  ---
  duration_ms: 2.700435
  ...
# Subtest: late final scoring cannot pay out into another game
ok 54 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.300965
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 55 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.454222
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 56 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.304561
  ...
# Subtest: historic placement skips the puff effect
ok 57 - historic placement skips the puff effect
  ---
  duration_ms: 0.294346
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 58 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.127809
  ...
# Subtest: source guard: concurrent announcements serialized
ok 59 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.130893
  ...
# Subtest: source guard: permission and disabled channel checked
ok 60 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.131635
  ...
# Subtest: source guard: denied notification is not marked
ok 61 - source guard: denied notification is not marked
  ---
  duration_ms: 0.158274
  ...
# Subtest: web/game.html: the game script parses
ok 62 - web/game.html: the game script parses
  ---
  duration_ms: 9.003973
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 63 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1144.889639
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 64 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.233736
  ...
1..64
# tests 64
# suites 0
# pass 63
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1474.937757

```
## build
```text

BUILD SUCCESSFUL in 1m 10s
33 actionable tasks: 33 executed
```
