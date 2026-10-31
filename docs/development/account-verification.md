# Account verification
Source: 4f3cd2d59df6f6c8734521dedc484501ebfa86ea
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
e one-shot
ok 72 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.30914
  ...
# Subtest: test source does not contain secret material
ok 73 - test source does not contain secret material
  ---
  duration_ms: 0.303812
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 74 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 4.55792
  ...
# Subtest: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.946899
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 2.240051
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.270262
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.352554
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.213538
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.2158
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 10.776419
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.897535
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.555446
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.82845
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.573711
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 86 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.40548
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 87 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.17643
  ...
# Subtest: source guard: concurrent announcements serialized
ok 88 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.149593
  ...
# Subtest: source guard: permission and disabled channel checked
ok 89 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.139087
  ...
# Subtest: source guard: denied notification is not marked
ok 90 - source guard: denied notification is not marked
  ---
  duration_ms: 0.112468
  ...
# Subtest: owner panel in the game: only for admins
ok 91 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.407253
  ...
# Subtest: web/game.html: the game script parses
ok 92 - web/game.html: the game script parses
  ---
  duration_ms: 10.594839
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 93 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.858264
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 94 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 894.695907
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 95 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.219997
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 96 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.225668
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 97 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 12.306239
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 98 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.172909
  ...
# Subtest: progress: levels and achievements
ok 99 - progress: levels and achievements
  ---
  duration_ms: 10.408187
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 100 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.796088
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 101 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.087007
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 102 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.537487
  ...
1..102
# tests 102
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 13
# todo 0
# duration_ms 1505.781744

```
## build
```text

BUILD SUCCESSFUL in 59s
33 actionable tasks: 33 executed
```
