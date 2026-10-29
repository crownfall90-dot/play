# Account verification
Source: 50d52b49e112faccc85823266848d98232d3d094
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
TAP version 13
# Subtest: Google sign-in uses Credential Manager and server client id
ok 1 - Google sign-in uses Credential Manager and server client id
  ---
  duration_ms: 1.056287
  ...
# Subtest: color is constrained and normalized
ok 2 - color is constrained and normalized
  ---
  duration_ms: 0.139219
  ...
# Subtest: sign-out clears identity but retains selected color
ok 3 - sign-out clears identity but retains selected color
  ---
  duration_ms: 0.157306
  ...
# Subtest: existing settings expose account container and lobby color picker (source check)
ok 4 - existing settings expose account container and lobby color picker (source check)
  ---
  duration_ms: 0.844258
  ...
# Subtest: existing Google flow exchanges token with Firebase and retains native bridge (source check)
ok 5 - existing Google flow exchanges token with Firebase and retains native bridge (source check)
  ---
  duration_ms: 0.322654
  ...
# Subtest: existing lobby color preference is saved through wallet (source check)
ok 6 - existing lobby color preference is saved through wallet (source check)
  ---
  duration_ms: 0.169204
  ...
# Subtest: all inline JavaScript compiles
ok 7 - all inline JavaScript compiles
  ---
  duration_ms: 6.250072
  ...
# Subtest: impossible tiles use finite silent scan
ok 8 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.280512
  ...
# Subtest: placement probe stops on first legal rotation
ok 9 - placement probe stops on first legal rotation
  ---
  duration_ms: 0.822987
  ...
# Subtest: finished marker is bounded and idempotent
ok 10 - finished marker is bounded and idempotent
  ---
  duration_ms: 12.094305
  ...
# Subtest: finished saved game is rejected and removed
ok 11 - finished saved game is rejected and removed
  ---
  duration_ms: 1.100594
  ...
# Subtest: active save is blocked in terminal phase
ok 12 - active save is blocked in terminal phase
  ---
  duration_ms: 0.8513
  ...
# Subtest: history replaces preliminary row with final row
ok 13 - history replaces preliminary row with final row
  ---
  duration_ms: 0.952752
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 14 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.310487
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 15 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.287963
  ...
# Subtest: duplicate start message has an explicit guard
ok 16 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.411649
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 17 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.323676
  ...
# Subtest: return from background routes terminal game home
ok 18 - return from background routes terminal game home
  ---
  duration_ms: 0.140351
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 19 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 2.621309
  ...
# Subtest: test source does not contain secret material
ok 20 - test source does not contain secret material
  ---
  duration_ms: 0.366451
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 21 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 1.9564
  ...
# Subtest: active legacy save remains compatible without localId
ok 22 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.014925
  ...
# Subtest: invalid saved structure is rejected
ok 23 - invalid saved structure is rejected
  ---
  duration_ms: 2.123871
  ...
# Subtest: late final scoring cannot pay out into another game
ok 24 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.358579
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 25 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.247011
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 26 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.291368
  ...
# Subtest: historic placement skips the puff effect
ok 27 - historic placement skips the puff effect
  ---
  duration_ms: 0.168653
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 28 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.821815
  ...
# Subtest: source guard: concurrent announcements serialized
ok 29 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.129003
  ...
# Subtest: source guard: permission and disabled channel checked
ok 30 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.104226
  ...
# Subtest: source guard: denied notification is not marked
ok 31 - source guard: denied notification is not marked
  ---
  duration_ms: 0.069965
  ...
# Subtest: diagnostics records Firebase acceptance, not display
ok 32 - diagnostics records Firebase acceptance, not display
  ---
  duration_ms: 1.191931
  ...
# Subtest: diagnostics checks retained token
ok 33 - diagnostics checks retained token
  ---
  duration_ms: 0.142765
  ...
# Subtest: diagnostics uses requested topic
ok 34 - diagnostics uses requested topic
  ---
  duration_ms: 0.16657
  ...
1..34
# tests 34
# suites 0
# pass 34
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 98.019116

```
## build
```text

BUILD SUCCESSFUL in 1m 8s
33 actionable tasks: 33 executed
```
