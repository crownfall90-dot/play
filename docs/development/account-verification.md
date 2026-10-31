# Account verification
Source: b7871aee104b4e49d6e47e4b6f39591383a9aeed
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
is rejected and removed
ok 61 - finished saved game is rejected and removed
  ---
  duration_ms: 1.15867
  ...
# Subtest: active save is blocked in terminal phase
ok 62 - active save is blocked in terminal phase
  ---
  duration_ms: 0.925323
  ...
# Subtest: history replaces preliminary row with final row
ok 63 - history replaces preliminary row with final row
  ---
  duration_ms: 1.293522
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 64 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.297958
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.258454
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.412462
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.541334
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.180118
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.332954
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.369853
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.365872
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.013679
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.251388
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.265497
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.385291
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.258765
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.34186
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 13.329196
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.915294
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.610193
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.802195
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 82 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.425721
  ...
# Subtest: source guard: concurrent announcements serialized
ok 83 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.161964
  ...
# Subtest: source guard: permission and disabled channel checked
ok 84 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.169948
  ...
# Subtest: source guard: denied notification is not marked
ok 85 - source guard: denied notification is not marked
  ---
  duration_ms: 0.152837
  ...
# Subtest: web/game.html: the game script parses
ok 86 - web/game.html: the game script parses
  ---
  duration_ms: 10.333064
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 87 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2798.272667
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 88 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.286554
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 89 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.906064
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 90 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.542436
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 91 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.999343
  ...
# Subtest: progress: levels and achievements
ok 92 - progress: levels and achievements
  ---
  duration_ms: 11.48393
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 93 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.217446
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 94 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.748525
  ...
1..94
# tests 94
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 5
# todo 0
# duration_ms 3378.920469

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
