# Account verification
Source: 816dd271c903c5b921ef4540b06f466f76a2bd22
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
  duration_ms: 0.286886
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 74 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.089281
  ...
# Subtest: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.989379
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 2.137533
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.260136
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.431611
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.225124
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.232144
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 10.213724
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.72775
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.446062
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.693154
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.196296
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 86 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.62324
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 87 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.190868
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 88 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.121686
  ...
# Subtest: source guard: concurrent announcements serialized
ok 89 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.120449
  ...
# Subtest: source guard: permission and disabled channel checked
ok 90 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.136343
  ...
# Subtest: source guard: denied notification is not marked
ok 91 - source guard: denied notification is not marked
  ---
  duration_ms: 0.102862
  ...
# Subtest: owner panel in the game: only for admins
ok 92 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.312769
  ...
# Subtest: web/game.html: the game script parses
ok 93 - web/game.html: the game script parses
  ---
  duration_ms: 8.577934
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 94 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.227893
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 95 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1229.361692
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 96 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.259465
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 97 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.164679
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 98 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 8.949497
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 99 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.04322
  ...
# Subtest: progress: levels and achievements
ok 100 - progress: levels and achievements
  ---
  duration_ms: 12.917137
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 101 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 5.493235
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 102 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.112877
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 103 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.283205
  ...
1..103
# tests 103
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 14
# todo 0
# duration_ms 1858.039627

```
## build
```text

BUILD SUCCESSFUL in 1m 1s
33 actionable tasks: 33 executed
```
