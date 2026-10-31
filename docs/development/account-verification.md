# Account verification
Source: 76aa807c28719071c4da74899a5ec3b79b481f28
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
e is rejected and removed
ok 61 - finished saved game is rejected and removed
  ---
  duration_ms: 0.925527
  ...
# Subtest: active save is blocked in terminal phase
ok 62 - active save is blocked in terminal phase
  ---
  duration_ms: 0.743308
  ...
# Subtest: history replaces preliminary row with final row
ok 63 - history replaces preliminary row with final row
  ---
  duration_ms: 1.105362
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 64 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.349617
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.234977
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.442904
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.500089
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.190792
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.433219
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.340693
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.047543
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.780893
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.109064
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.218162
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.332101
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.179726
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.265932
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 8.816939
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.624722
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.442623
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.87598
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 82 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.973197
  ...
# Subtest: source guard: concurrent announcements serialized
ok 83 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.125565
  ...
# Subtest: source guard: permission and disabled channel checked
ok 84 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.152735
  ...
# Subtest: source guard: denied notification is not marked
ok 85 - source guard: denied notification is not marked
  ---
  duration_ms: 0.103783
  ...
# Subtest: web/game.html: the game script parses
ok 86 - web/game.html: the game script parses
  ---
  duration_ms: 7.941937
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 87 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1890.350279
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 88 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.260595
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 89 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.039338
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 90 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 15.460619
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 91 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.84774
  ...
# Subtest: progress: levels and achievements
ok 92 - progress: levels and achievements
  ---
  duration_ms: 9.524524
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 93 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.755008
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 94 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.062385
  ...
1..94
# tests 94
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 5
# todo 0
# duration_ms 2389.420286

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
