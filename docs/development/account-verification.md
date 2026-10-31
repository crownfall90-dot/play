# Account verification
Source: ea881a3b4bc7fb8f581b7d0f4fcb1d1cd9bf9df9
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ys
ok 56 - graphics switch: decor of placed cards is redrawn, the game stays # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.235288
  ...
# Subtest: hint button: on your turn it suggests a legal move with a reason
ok 57 - hint button: on your turn it suggests a legal move with a reason # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.571344
  ...
# Subtest: all inline JavaScript compiles
ok 58 - all inline JavaScript compiles
  ---
  duration_ms: 10.22741
  ...
# Subtest: impossible tiles use finite silent scan
ok 59 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.714127
  ...
# Subtest: finished marker is bounded and idempotent
ok 60 - finished marker is bounded and idempotent
  ---
  duration_ms: 20.379679
  ...
# Subtest: finished saved game is rejected and removed
ok 61 - finished saved game is rejected and removed
  ---
  duration_ms: 1.194707
  ...
# Subtest: active save is blocked in terminal phase
ok 62 - active save is blocked in terminal phase
  ---
  duration_ms: 0.877888
  ...
# Subtest: history replaces preliminary row with final row
ok 63 - history replaces preliminary row with final row
  ---
  duration_ms: 1.000621
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 64 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.27025
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.213516
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.398109
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.349808
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.162851
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 1.180111
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.353442
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.029247
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.968803
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.295426
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.271862
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.38519
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.267205
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.254807
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 78 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.245502
  ...
# Subtest: source guard: concurrent announcements serialized
ok 79 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.157633
  ...
# Subtest: source guard: permission and disabled channel checked
ok 80 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.150933
  ...
# Subtest: source guard: denied notification is not marked
ok 81 - source guard: denied notification is not marked
  ---
  duration_ms: 0.154499
  ...
# Subtest: web/game.html: the game script parses
ok 82 - web/game.html: the game script parses
  ---
  duration_ms: 11.224275
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 83 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1163.376143
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 84 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.263831
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 85 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.292741
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 86 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 12.103586
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 87 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 13.127611
  ...
# Subtest: progress: levels and achievements
ok 88 - progress: levels and achievements
  ---
  duration_ms: 8.378204
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 89 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.530484
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 90 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.553758
  ...
1..90
# tests 90
# suites 0
# pass 85
# fail 0
# cancelled 0
# skipped 5
# todo 0
# duration_ms 1636.532863

```
## build
```text

BUILD SUCCESSFUL in 1m 18s
33 actionable tasks: 33 executed
```
