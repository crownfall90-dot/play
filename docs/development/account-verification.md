# Account verification
Source: 9347d733fdd8552a8965b2c74276f8b03bb0903e
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
d
  ---
  duration_ms: 0.330039
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.230762
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.33039
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.304261
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.164474
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 2.208876
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.344551
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.173052
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.167652
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.046604
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.258143
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.328517
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.227067
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.213787
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 13.466768
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.776351
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.508003
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.708964
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 82 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.0439
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 83 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.987864
  ...
# Subtest: source guard: concurrent announcements serialized
ok 84 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.128771
  ...
# Subtest: source guard: permission and disabled channel checked
ok 85 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.160247
  ...
# Subtest: source guard: denied notification is not marked
ok 86 - source guard: denied notification is not marked
  ---
  duration_ms: 0.114089
  ...
# Subtest: web/game.html: the game script parses
ok 87 - web/game.html: the game script parses
  ---
  duration_ms: 9.242795
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 88 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1104.23082
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 89 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.23641
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 90 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.754187
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 91 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 12.772118
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 92 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 15.180059
  ...
# Subtest: progress: levels and achievements
ok 93 - progress: levels and achievements
  ---
  duration_ms: 18.288367
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 94 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 5.548557
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 95 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.470751
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 96 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.864335
  ...
1..96
# tests 96
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 7
# todo 0
# duration_ms 1663.433678

```
## build
```text

BUILD SUCCESSFUL in 1m 24s
33 actionable tasks: 33 executed
```
