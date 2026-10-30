# Account verification
Source: 69884613e12d2de2a1e129449676de29b6afa2ba
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
rror classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 3240.148548
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 48 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 6.190513
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 49 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.078253
  ...
# Subtest: existing browser entry still selects Google web button
ok 50 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.195739
  ...
# Subtest: all inline JavaScript compiles
ok 51 - all inline JavaScript compiles
  ---
  duration_ms: 8.169344
  ...
# Subtest: impossible tiles use finite silent scan
ok 52 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.527679
  ...
# Subtest: finished marker is bounded and idempotent
ok 53 - finished marker is bounded and idempotent
  ---
  duration_ms: 16.697955
  ...
# Subtest: finished saved game is rejected and removed
ok 54 - finished saved game is rejected and removed
  ---
  duration_ms: 1.228258
  ...
# Subtest: active save is blocked in terminal phase
ok 55 - active save is blocked in terminal phase
  ---
  duration_ms: 1.018194
  ...
# Subtest: history replaces preliminary row with final row
ok 56 - history replaces preliminary row with final row
  ---
  duration_ms: 1.182499
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 57 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.340049
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 58 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.26766
  ...
# Subtest: duplicate start message has an explicit guard
ok 59 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.465827
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 60 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.537034
  ...
# Subtest: return from background routes terminal game home
ok 61 - return from background routes terminal game home
  ---
  duration_ms: 0.231076
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 62 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.417425
  ...
# Subtest: test source does not contain secret material
ok 63 - test source does not contain secret material
  ---
  duration_ms: 0.366409
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 64 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 4.392397
  ...
# Subtest: active legacy save remains compatible without localId
ok 65 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.047537
  ...
# Subtest: invalid saved structure is rejected
ok 66 - invalid saved structure is rejected
  ---
  duration_ms: 2.400882
  ...
# Subtest: late final scoring cannot pay out into another game
ok 67 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.302592
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 68 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.420489
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 69 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.278667
  ...
# Subtest: historic placement skips the puff effect
ok 70 - historic placement skips the puff effect
  ---
  duration_ms: 0.269583
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 71 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.971884
  ...
# Subtest: source guard: concurrent announcements serialized
ok 72 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.12727
  ...
# Subtest: source guard: permission and disabled channel checked
ok 73 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.120861
  ...
# Subtest: source guard: denied notification is not marked
ok 74 - source guard: denied notification is not marked
  ---
  duration_ms: 0.1008
  ...
# Subtest: web/game.html: the game script parses
ok 75 - web/game.html: the game script parses
  ---
  duration_ms: 8.034351
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 76 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3263.274274
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 77 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.228662
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 78 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.316716
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 79 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 7.236437
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 80 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.847602
  ...
# Subtest: progress: levels and achievements
ok 81 - progress: levels and achievements
  ---
  duration_ms: 8.050276
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 82 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.346502
  ...
1..82
# tests 82
# suites 0
# pass 81
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 3637.277871

```
## build
```text

BUILD SUCCESSFUL in 1m 5s
33 actionable tasks: 33 executed
```
