# Account verification
Source: ac10b21eef2ffc9b4a803e70ed435011b79a7db8
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ck helper prefers finishing its own town
  ---
  duration_ms: 3.53178
  ...
# Subtest: engine/tiles: card types and stack sizes per mode
ok 30 - engine/tiles: card types and stack sizes per mode
  ---
  duration_ms: 10.719994
  ...
# Subtest: golden games: replays end exactly as recorded
ok 31 - golden games: replays end exactly as recorded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.324251
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 32 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 2.544168
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 33 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.372633
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 34 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 2875.507992
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 35 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 8.973126
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 36 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.804602
  ...
# Subtest: existing browser entry still selects Google web button
ok 37 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.22235
  ...
# Subtest: all inline JavaScript compiles
ok 38 - all inline JavaScript compiles
  ---
  duration_ms: 6.549518
  ...
# Subtest: impossible tiles use finite silent scan
ok 39 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.339022
  ...
# Subtest: finished marker is bounded and idempotent
ok 40 - finished marker is bounded and idempotent
  ---
  duration_ms: 11.230109
  ...
# Subtest: finished saved game is rejected and removed
ok 41 - finished saved game is rejected and removed
  ---
  duration_ms: 0.931449
  ...
# Subtest: active save is blocked in terminal phase
ok 42 - active save is blocked in terminal phase
  ---
  duration_ms: 0.945991
  ...
# Subtest: history replaces preliminary row with final row
ok 43 - history replaces preliminary row with final row
  ---
  duration_ms: 0.87817
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 44 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.235369
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 45 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.17529
  ...
# Subtest: duplicate start message has an explicit guard
ok 46 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.336088
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 47 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.316038
  ...
# Subtest: return from background routes terminal game home
ok 48 - return from background routes terminal game home
  ---
  duration_ms: 0.130373
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 49 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.276879
  ...
# Subtest: test source does not contain secret material
ok 50 - test source does not contain secret material
  ---
  duration_ms: 0.289058
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 51 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.062694
  ...
# Subtest: active legacy save remains compatible without localId
ok 52 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.828878
  ...
# Subtest: invalid saved structure is rejected
ok 53 - invalid saved structure is rejected
  ---
  duration_ms: 2.264644
  ...
# Subtest: late final scoring cannot pay out into another game
ok 54 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.291121
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 55 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.51348
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 56 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.355777
  ...
# Subtest: historic placement skips the puff effect
ok 57 - historic placement skips the puff effect
  ---
  duration_ms: 0.296129
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 58 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.987923
  ...
# Subtest: source guard: concurrent announcements serialized
ok 59 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.127759
  ...
# Subtest: source guard: permission and disabled channel checked
ok 60 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.131775
  ...
# Subtest: source guard: denied notification is not marked
ok 61 - source guard: denied notification is not marked
  ---
  duration_ms: 0.104084
  ...
# Subtest: web/game.html: the game script parses
ok 62 - web/game.html: the game script parses
  ---
  duration_ms: 12.231081
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 63 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2953.671993
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 64 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.232704
  ...
1..64
# tests 64
# suites 0
# pass 63
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 3258.021079

```
## build
```text

BUILD SUCCESSFUL in 1m 4s
33 actionable tasks: 33 executed
```
