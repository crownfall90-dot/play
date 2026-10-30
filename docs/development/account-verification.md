# Account verification
Source: f4dce815a0b5f0ed00634203c1b1b64dc55fca7a
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
bundle, not its own copy
  ---
  duration_ms: 3.518355
  ...
# Subtest: engine/tiles: card types and stack sizes per mode
ok 26 - engine/tiles: card types and stack sizes per mode
  ---
  duration_ms: 17.412306
  ...
# Subtest: golden games: replays end exactly as recorded
ok 27 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.75281
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 28 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 5.386769
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 29 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 2.007995
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 30 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1179.731691
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 31 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 9.789356
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 32 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 4.518534
  ...
# Subtest: existing browser entry still selects Google web button
ok 33 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.611437
  ...
# Subtest: all inline JavaScript compiles
ok 34 - all inline JavaScript compiles
  ---
  duration_ms: 11.412647
  ...
# Subtest: impossible tiles use finite silent scan
ok 35 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.485894
  ...
# Subtest: placement probe stops on first legal rotation
ok 36 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.148356
  ...
# Subtest: finished marker is bounded and idempotent
ok 37 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.558919
  ...
# Subtest: finished saved game is rejected and removed
ok 38 - finished saved game is rejected and removed
  ---
  duration_ms: 1.149848
  ...
# Subtest: active save is blocked in terminal phase
ok 39 - active save is blocked in terminal phase
  ---
  duration_ms: 0.961719
  ...
# Subtest: history replaces preliminary row with final row
ok 40 - history replaces preliminary row with final row
  ---
  duration_ms: 1.078246
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 41 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.323652
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 42 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.353637
  ...
# Subtest: duplicate start message has an explicit guard
ok 43 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.401797
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 44 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.3923
  ...
# Subtest: return from background routes terminal game home
ok 45 - return from background routes terminal game home
  ---
  duration_ms: 0.195654
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 46 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.510669
  ...
# Subtest: test source does not contain secret material
ok 47 - test source does not contain secret material
  ---
  duration_ms: 0.508275
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 48 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.311859
  ...
# Subtest: active legacy save remains compatible without localId
ok 49 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.208517
  ...
# Subtest: invalid saved structure is rejected
ok 50 - invalid saved structure is rejected
  ---
  duration_ms: 2.93008
  ...
# Subtest: late final scoring cannot pay out into another game
ok 51 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.757258
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 52 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.536277
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 53 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.66142
  ...
# Subtest: historic placement skips the puff effect
ok 54 - historic placement skips the puff effect
  ---
  duration_ms: 0.196256
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 55 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.499579
  ...
# Subtest: source guard: concurrent announcements serialized
ok 56 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.151613
  ...
# Subtest: source guard: permission and disabled channel checked
ok 57 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.260655
  ...
# Subtest: source guard: denied notification is not marked
ok 58 - source guard: denied notification is not marked
  ---
  duration_ms: 0.170076
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 59 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1278.969238
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 60 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.342988
  ...
1..60
# tests 60
# suites 0
# pass 59
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1623.158055

```
## build
```text

BUILD SUCCESSFUL in 1m 14s
33 actionable tasks: 33 executed
```
