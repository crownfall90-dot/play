# Account verification
Source: 4b4f9c539fb3220b837e3da60da8d258e9fcee05
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
replaces preliminary row with final row
  ---
  duration_ms: 1.219525
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 64 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.336327
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 65 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.209361
  ...
# Subtest: duplicate start message has an explicit guard
ok 66 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.430353
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.381733
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.233676
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.499221
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.468694
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.686661
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.18477
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 2.293328
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.304488
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.458746
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.24628
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.249065
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 13.896162
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.979538
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.738187
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 3.145387
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 82 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.699326
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 83 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.148848
  ...
# Subtest: source guard: concurrent announcements serialized
ok 84 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.174085
  ...
# Subtest: source guard: permission and disabled channel checked
ok 85 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.205934
  ...
# Subtest: source guard: denied notification is not marked
ok 86 - source guard: denied notification is not marked
  ---
  duration_ms: 0.167983
  ...
# Subtest: web/game.html: the game script parses
ok 87 - web/game.html: the game script parses
  ---
  duration_ms: 12.171105
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 88 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1238.491308
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 89 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.2875
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 90 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.405338
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 91 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 29.593316
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 92 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 21.559341
  ...
# Subtest: progress: levels and achievements
ok 93 - progress: levels and achievements
  ---
  duration_ms: 19.055948
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 94 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 7.410481
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 95 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.920388
  ...
1..95
# tests 95
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 6
# todo 0
# duration_ms 1945.024197

```
## build
```text

BUILD SUCCESSFUL in 1m 19s
33 actionable tasks: 33 executed
```
