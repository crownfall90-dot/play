# Account verification
Source: c05172cd0fbf46e4167e694817dfcdac6ce09774
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
rror classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1365.477163
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 47 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 7.253607
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 48 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.828851
  ...
# Subtest: existing browser entry still selects Google web button
ok 49 - existing browser entry still selects Google web button
  ---
  duration_ms: 0.967568
  ...
# Subtest: all inline JavaScript compiles
ok 50 - all inline JavaScript compiles
  ---
  duration_ms: 4.47027
  ...
# Subtest: impossible tiles use finite silent scan
ok 51 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.256704
  ...
# Subtest: finished marker is bounded and idempotent
ok 52 - finished marker is bounded and idempotent
  ---
  duration_ms: 8.073583
  ...
# Subtest: finished saved game is rejected and removed
ok 53 - finished saved game is rejected and removed
  ---
  duration_ms: 0.675791
  ...
# Subtest: active save is blocked in terminal phase
ok 54 - active save is blocked in terminal phase
  ---
  duration_ms: 0.565066
  ...
# Subtest: history replaces preliminary row with final row
ok 55 - history replaces preliminary row with final row
  ---
  duration_ms: 0.636813
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 56 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.199369
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 57 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.111367
  ...
# Subtest: duplicate start message has an explicit guard
ok 58 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.229283
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 59 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.202994
  ...
# Subtest: return from background routes terminal game home
ok 60 - return from background routes terminal game home
  ---
  duration_ms: 0.080751
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 61 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.465957
  ...
# Subtest: test source does not contain secret material
ok 62 - test source does not contain secret material
  ---
  duration_ms: 0.257025
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 63 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 1.603861
  ...
# Subtest: active legacy save remains compatible without localId
ok 64 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.564124
  ...
# Subtest: invalid saved structure is rejected
ok 65 - invalid saved structure is rejected
  ---
  duration_ms: 1.290371
  ...
# Subtest: late final scoring cannot pay out into another game
ok 66 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.14751
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 67 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.203425
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 68 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.109093
  ...
# Subtest: historic placement skips the puff effect
ok 69 - historic placement skips the puff effect
  ---
  duration_ms: 0.122653
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 70 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.793949
  ...
# Subtest: source guard: concurrent announcements serialized
ok 71 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.112168
  ...
# Subtest: source guard: permission and disabled channel checked
ok 72 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.090124
  ...
# Subtest: source guard: denied notification is not marked
ok 73 - source guard: denied notification is not marked
  ---
  duration_ms: 0.0932
  ...
# Subtest: web/game.html: the game script parses
ok 74 - web/game.html: the game script parses
  ---
  duration_ms: 7.212374
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 75 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1392.378496
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 76 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.203174
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 77 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.481044
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 78 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.054959
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 79 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.23699
  ...
# Subtest: progress: levels and achievements
ok 80 - progress: levels and achievements
  ---
  duration_ms: 7.517611
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 81 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.165355
  ...
1..81
# tests 81
# suites 0
# pass 80
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1653.568591

```
## build
```text

BUILD SUCCESSFUL in 1m
33 actionable tasks: 33 executed
```
