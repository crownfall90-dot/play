# Account verification
Source: 3a079cd0e8d93a6b3279bb340c8a180b7965fa75
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ne-shot
ok 72 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.231497
  ...
# Subtest: test source does not contain secret material
ok 73 - test source does not contain secret material
  ---
  duration_ms: 0.238758
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 74 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 1.754667
  ...
# Subtest: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.840037
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 1.753204
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.228371
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.307821
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.170445
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.224896
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 8.995884
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.758666
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.523854
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.819583
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.903342
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 86 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.270892
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 87 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.916872
  ...
# Subtest: source guard: concurrent announcements serialized
ok 88 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.142523
  ...
# Subtest: source guard: permission and disabled channel checked
ok 89 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.122213
  ...
# Subtest: source guard: denied notification is not marked
ok 90 - source guard: denied notification is not marked
  ---
  duration_ms: 0.074381
  ...
# Subtest: owner panel in the game: only for admins
ok 91 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.054338
  ...
# Subtest: web/game.html: the game script parses
ok 92 - web/game.html: the game script parses
  ---
  duration_ms: 6.723943
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 93 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.239636
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 94 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 837.479347
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 95 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.191958
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 96 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.380473
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 97 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 18.016279
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 98 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 19.667621
  ...
# Subtest: progress: levels and achievements
ok 99 - progress: levels and achievements
  ---
  duration_ms: 9.328672
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 100 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.862183
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 101 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.449319
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 102 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.693124
  ...
1..102
# tests 102
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 13
# todo 0
# duration_ms 1339.3946

```
## build
```text

BUILD SUCCESSFUL in 1m 1s
33 actionable tasks: 33 executed
```
