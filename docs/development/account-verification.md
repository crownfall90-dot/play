# Account verification
Source: 52e4c81ac7a0e40b50e2bab5f149f249a31264dd
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
r classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1406.496861
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 45 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 7.613551
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 46 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.275596
  ...
# Subtest: existing browser entry still selects Google web button
ok 47 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.597363
  ...
# Subtest: all inline JavaScript compiles
ok 48 - all inline JavaScript compiles
  ---
  duration_ms: 8.684014
  ...
# Subtest: impossible tiles use finite silent scan
ok 49 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.412901
  ...
# Subtest: finished marker is bounded and idempotent
ok 50 - finished marker is bounded and idempotent
  ---
  duration_ms: 21.512236
  ...
# Subtest: finished saved game is rejected and removed
ok 51 - finished saved game is rejected and removed
  ---
  duration_ms: 1.344338
  ...
# Subtest: active save is blocked in terminal phase
ok 52 - active save is blocked in terminal phase
  ---
  duration_ms: 1.160406
  ...
# Subtest: history replaces preliminary row with final row
ok 53 - history replaces preliminary row with final row
  ---
  duration_ms: 1.384608
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 54 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.37852
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 55 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.290649
  ...
# Subtest: duplicate start message has an explicit guard
ok 56 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.50085
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 57 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.554921
  ...
# Subtest: return from background routes terminal game home
ok 58 - return from background routes terminal game home
  ---
  duration_ms: 0.252092
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 59 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.664368
  ...
# Subtest: test source does not contain secret material
ok 60 - test source does not contain secret material
  ---
  duration_ms: 0.816457
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 61 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.60976
  ...
# Subtest: active legacy save remains compatible without localId
ok 62 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.062371
  ...
# Subtest: invalid saved structure is rejected
ok 63 - invalid saved structure is rejected
  ---
  duration_ms: 2.310737
  ...
# Subtest: late final scoring cannot pay out into another game
ok 64 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.262478
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 65 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.430377
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 66 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.373092
  ...
# Subtest: historic placement skips the puff effect
ok 67 - historic placement skips the puff effect
  ---
  duration_ms: 0.305522
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 68 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.779091
  ...
# Subtest: source guard: concurrent announcements serialized
ok 69 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.210672
  ...
# Subtest: source guard: permission and disabled channel checked
ok 70 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.239785
  ...
# Subtest: source guard: denied notification is not marked
ok 71 - source guard: denied notification is not marked
  ---
  duration_ms: 0.241958
  ...
# Subtest: web/game.html: the game script parses
ok 72 - web/game.html: the game script parses
  ---
  duration_ms: 18.99618
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 73 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1419.240117
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 74 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.291191
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 75 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.372547
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 76 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 16.457055
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 77 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 16.848129
  ...
# Subtest: progress: levels and achievements
ok 78 - progress: levels and achievements
  ---
  duration_ms: 16.995927
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 79 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.36121
  ...
1..79
# tests 79
# suites 0
# pass 78
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1912.822737

```
## build
```text

BUILD SUCCESSFUL in 1m 23s
33 actionable tasks: 33 executed
```
