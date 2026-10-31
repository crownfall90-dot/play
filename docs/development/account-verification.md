# Account verification
Source: 39e4b5f1722bd7ef8371e18fff96a8063c9e0edf
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
me is rejected and removed
ok 61 - finished saved game is rejected and removed
  ---
  duration_ms: 1.090651
  ...
# Subtest: active save is blocked in terminal phase
ok 62 - active save is blocked in terminal phase
  ---
  duration_ms: 1.003619
  ...
# Subtest: history replaces preliminary row with final row
ok 63 - history replaces preliminary row with final row
  ---
  duration_ms: 1.108975
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 64 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.297064
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.206755
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.44568
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.463784
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.170618
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.479603
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.482108
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.785146
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.28898
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.236444
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.260706
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.446953
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.279491
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.250337
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 14.461818
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.021603
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.647356
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.82602
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 82 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.82029
  ...
# Subtest: source guard: concurrent announcements serialized
ok 83 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.211303
  ...
# Subtest: source guard: permission and disabled channel checked
ok 84 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.222704
  ...
# Subtest: source guard: denied notification is not marked
ok 85 - source guard: denied notification is not marked
  ---
  duration_ms: 0.200713
  ...
# Subtest: web/game.html: the game script parses
ok 86 - web/game.html: the game script parses
  ---
  duration_ms: 19.31831
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 87 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1981.93101
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 88 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.347587
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 89 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.729878
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 90 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 20.565633
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 91 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.835495
  ...
# Subtest: progress: levels and achievements
ok 92 - progress: levels and achievements
  ---
  duration_ms: 12.603767
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 93 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.594455
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 94 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.864101
  ...
1..94
# tests 94
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 5
# todo 0
# duration_ms 2623.902139

```
## build
```text

BUILD SUCCESSFUL in 1m 34s
33 actionable tasks: 33 executed
```
