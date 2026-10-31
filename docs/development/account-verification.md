# Account verification
Source: 3e954e7c675f447a841b680f8252e34a396c2ce7
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text

ok 54 - graphics switch: decor of placed cards is redrawn, the game stays # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.757643
  ...
# Subtest: hint button: on your turn it suggests a legal move with a reason
ok 55 - hint button: on your turn it suggests a legal move with a reason # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.87861
  ...
# Subtest: all inline JavaScript compiles
ok 56 - all inline JavaScript compiles
  ---
  duration_ms: 7.267709
  ...
# Subtest: impossible tiles use finite silent scan
ok 57 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.420377
  ...
# Subtest: finished marker is bounded and idempotent
ok 58 - finished marker is bounded and idempotent
  ---
  duration_ms: 17.039824
  ...
# Subtest: finished saved game is rejected and removed
ok 59 - finished saved game is rejected and removed
  ---
  duration_ms: 1.906833
  ...
# Subtest: active save is blocked in terminal phase
ok 60 - active save is blocked in terminal phase
  ---
  duration_ms: 1.589148
  ...
# Subtest: history replaces preliminary row with final row
ok 61 - history replaces preliminary row with final row
  ---
  duration_ms: 1.709293
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 62 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.471604
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 63 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.367439
  ...
# Subtest: duplicate start message has an explicit guard
ok 64 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.570008
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 65 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.599763
  ...
# Subtest: return from background routes terminal game home
ok 66 - return from background routes terminal game home
  ---
  duration_ms: 0.236544
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 67 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 1.220708
  ...
# Subtest: test source does not contain secret material
ok 68 - test source does not contain secret material
  ---
  duration_ms: 0.837329
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 69 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 4.990262
  ...
# Subtest: active legacy save remains compatible without localId
ok 70 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.257296
  ...
# Subtest: invalid saved structure is rejected
ok 71 - invalid saved structure is rejected
  ---
  duration_ms: 2.676034
  ...
# Subtest: late final scoring cannot pay out into another game
ok 72 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.286136
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 73 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.542567
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 74 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.365656
  ...
# Subtest: historic placement skips the puff effect
ok 75 - historic placement skips the puff effect
  ---
  duration_ms: 0.341831
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 76 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 6.310145
  ...
# Subtest: source guard: concurrent announcements serialized
ok 77 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.224942
  ...
# Subtest: source guard: permission and disabled channel checked
ok 78 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.284002
  ...
# Subtest: source guard: denied notification is not marked
ok 79 - source guard: denied notification is not marked
  ---
  duration_ms: 0.228368
  ...
# Subtest: web/game.html: the game script parses
ok 80 - web/game.html: the game script parses
  ---
  duration_ms: 14.613996
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 81 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1537.078384
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 82 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.338865
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 83 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.002166
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 84 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.867515
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 85 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.607716
  ...
# Subtest: progress: levels and achievements
ok 86 - progress: levels and achievements
  ---
  duration_ms: 15.239498
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 87 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 6.392399
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 88 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.829422
  ...
1..88
# tests 88
# suites 0
# pass 84
# fail 0
# cancelled 0
# skipped 4
# todo 0
# duration_ms 2096.226269

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
