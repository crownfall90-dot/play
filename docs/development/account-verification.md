# Account verification
Source: b4c040a4a332de421249e109a863d7756f50c5e0
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
s
ok 55 - graphics switch: decor of placed cards is redrawn, the game stays # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.320354
  ...
# Subtest: hint button: on your turn it suggests a legal move with a reason
ok 56 - hint button: on your turn it suggests a legal move with a reason # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.034473
  ...
# Subtest: all inline JavaScript compiles
ok 57 - all inline JavaScript compiles
  ---
  duration_ms: 9.52384
  ...
# Subtest: impossible tiles use finite silent scan
ok 58 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.599695
  ...
# Subtest: finished marker is bounded and idempotent
ok 59 - finished marker is bounded and idempotent
  ---
  duration_ms: 22.240599
  ...
# Subtest: finished saved game is rejected and removed
ok 60 - finished saved game is rejected and removed
  ---
  duration_ms: 1.565532
  ...
# Subtest: active save is blocked in terminal phase
ok 61 - active save is blocked in terminal phase
  ---
  duration_ms: 1.401786
  ...
# Subtest: history replaces preliminary row with final row
ok 62 - history replaces preliminary row with final row
  ---
  duration_ms: 1.761726
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 63 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.531649
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 64 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.342016
  ...
# Subtest: duplicate start message has an explicit guard
ok 65 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.635221
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 66 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.717975
  ...
# Subtest: return from background routes terminal game home
ok 67 - return from background routes terminal game home
  ---
  duration_ms: 0.347085
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 68 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 1.043961
  ...
# Subtest: test source does not contain secret material
ok 69 - test source does not contain secret material
  ---
  duration_ms: 0.474993
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 70 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.890766
  ...
# Subtest: active legacy save remains compatible without localId
ok 71 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.493377
  ...
# Subtest: invalid saved structure is rejected
ok 72 - invalid saved structure is rejected
  ---
  duration_ms: 3.230187
  ...
# Subtest: late final scoring cannot pay out into another game
ok 73 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.404643
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 74 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.595237
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 75 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.369808
  ...
# Subtest: historic placement skips the puff effect
ok 76 - historic placement skips the puff effect
  ---
  duration_ms: 0.375729
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 77 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.413378
  ...
# Subtest: source guard: concurrent announcements serialized
ok 78 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.162622
  ...
# Subtest: source guard: permission and disabled channel checked
ok 79 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.169304
  ...
# Subtest: source guard: denied notification is not marked
ok 80 - source guard: denied notification is not marked
  ---
  duration_ms: 0.154197
  ...
# Subtest: web/game.html: the game script parses
ok 81 - web/game.html: the game script parses
  ---
  duration_ms: 12.758695
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 82 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1501.98913
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 83 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.333229
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 84 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.996892
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 85 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 13.708571
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 86 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.453558
  ...
# Subtest: progress: levels and achievements
ok 87 - progress: levels and achievements
  ---
  duration_ms: 14.205315
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 88 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.308171
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 89 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.691455
  ...
1..89
# tests 89
# suites 0
# pass 84
# fail 0
# cancelled 0
# skipped 5
# todo 0
# duration_ms 2066.628732

```
## build
```text

BUILD SUCCESSFUL in 1m 21s
33 actionable tasks: 33 executed
```
