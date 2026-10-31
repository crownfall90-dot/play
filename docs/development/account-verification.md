# Account verification
Source: bbb6775daf718aa03310d15593d90e2ab36cf2da
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
_ms: 0.366493
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 67 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.346192
  ...
# Subtest: return from background routes terminal game home
ok 68 - return from background routes terminal game home
  ---
  duration_ms: 0.178053
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 69 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.459681
  ...
# Subtest: test source does not contain secret material
ok 70 - test source does not contain secret material
  ---
  duration_ms: 0.437735
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 71 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 3.011577
  ...
# Subtest: active legacy save remains compatible without localId
ok 72 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.377363
  ...
# Subtest: invalid saved structure is rejected
ok 73 - invalid saved structure is rejected
  ---
  duration_ms: 3.65831
  ...
# Subtest: late final scoring cannot pay out into another game
ok 74 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.367357
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 75 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.589346
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 76 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.381091
  ...
# Subtest: historic placement skips the puff effect
ok 77 - historic placement skips the puff effect
  ---
  duration_ms: 0.421203
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 78 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 24.416786
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 79 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.085759
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 80 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 1.42091
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 81 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.702447
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 82 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 3.657391
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 83 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.506997
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 84 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.720132
  ...
# Subtest: source guard: concurrent announcements serialized
ok 85 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.216966
  ...
# Subtest: source guard: permission and disabled channel checked
ok 86 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.23573
  ...
# Subtest: source guard: denied notification is not marked
ok 87 - source guard: denied notification is not marked
  ---
  duration_ms: 0.201996
  ...
# Subtest: web/game.html: the game script parses
ok 88 - web/game.html: the game script parses
  ---
  duration_ms: 13.049467
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 89 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1248.306946
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 90 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.274923
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 91 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.828964
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 92 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 19.102286
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 93 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 17.334829
  ...
# Subtest: progress: levels and achievements
ok 94 - progress: levels and achievements
  ---
  duration_ms: 15.591936
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 95 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 4.573515
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 96 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.478177
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 97 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.437217
  ...
1..97
# tests 97
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 8
# todo 0
# duration_ms 1906.563512

```
## build
```text

BUILD SUCCESSFUL in 1m 22s
33 actionable tasks: 33 executed
```
