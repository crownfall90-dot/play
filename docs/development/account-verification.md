# Account verification
Source: 5a9a82350e94412208c59274108b5c0009cbdf5c
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ield
  ---
  duration_ms: 0.322536
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.218583
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.336216
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.307845
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.188408
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.416164
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.367833
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.203284
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.83271
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 1.80137
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.219323
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.313743
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.185063
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.219684
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 12.707203
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.96235
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.701616
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.244655
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 82 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.165361
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 83 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.54407
  ...
# Subtest: source guard: concurrent announcements serialized
ok 84 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.182339
  ...
# Subtest: source guard: permission and disabled channel checked
ok 85 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.201288
  ...
# Subtest: source guard: denied notification is not marked
ok 86 - source guard: denied notification is not marked
  ---
  duration_ms: 0.18967
  ...
# Subtest: web/game.html: the game script parses
ok 87 - web/game.html: the game script parses
  ---
  duration_ms: 8.012391
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 88 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3386.696812
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 89 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.228297
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 90 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.354346
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 91 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 7.366267
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 92 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.877802
  ...
# Subtest: progress: levels and achievements
ok 93 - progress: levels and achievements
  ---
  duration_ms: 8.137525
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 94 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.465761
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 95 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.278528
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 96 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.251848
  ...
1..96
# tests 96
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 7
# todo 0
# duration_ms 3886.251859

```
## build
```text

BUILD SUCCESSFUL in 1m 8s
33 actionable tasks: 33 executed
```
