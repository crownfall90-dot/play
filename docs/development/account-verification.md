# Account verification
Source: 22734851d109706f60c8b4e826844851c2f3845a
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text

  ---
  duration_ms: 0.291663
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.2202
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.453865
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.386921
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.185766
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.480124
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.479333
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.756854
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.029898
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.237376
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.271305
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.430011
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.315818
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.245547
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 17.367262
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.429753
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.973352
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.928093
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 82 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.897204
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 83 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.323615
  ...
# Subtest: source guard: concurrent announcements serialized
ok 84 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.157163
  ...
# Subtest: source guard: permission and disabled channel checked
ok 85 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.178151
  ...
# Subtest: source guard: denied notification is not marked
ok 86 - source guard: denied notification is not marked
  ---
  duration_ms: 0.153716
  ...
# Subtest: web/game.html: the game script parses
ok 87 - web/game.html: the game script parses
  ---
  duration_ms: 11.32476
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 88 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2773.49969
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 89 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.281023
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 90 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.101706
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 91 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.661903
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 92 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.455889
  ...
# Subtest: progress: levels and achievements
ok 93 - progress: levels and achievements
  ---
  duration_ms: 11.184498
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 94 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.194569
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 95 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.778432
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 96 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.856057
  ...
1..96
# tests 96
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 7
# todo 0
# duration_ms 3418.684044

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
