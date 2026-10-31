# Account verification
Source: f6bf0c6ea56d56d06f84b8046b85c313f68af8e1
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
t: active legacy save remains compatible without localId
ok 75 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.649196
  ...
# Subtest: invalid saved structure is rejected
ok 76 - invalid saved structure is rejected
  ---
  duration_ms: 1.459591
  ...
# Subtest: late final scoring cannot pay out into another game
ok 77 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.168901
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 78 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.242481
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 79 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.143484
  ...
# Subtest: historic placement skips the puff effect
ok 80 - historic placement skips the puff effect
  ---
  duration_ms: 0.142292
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 81 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 6.479858
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 82 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.627323
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 83 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.478712
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 84 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.681511
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 85 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.209829
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 86 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.151623
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 87 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.238852
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 88 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.848833
  ...
# Subtest: source guard: concurrent announcements serialized
ok 89 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.096824
  ...
# Subtest: source guard: permission and disabled channel checked
ok 90 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.098216
  ...
# Subtest: source guard: denied notification is not marked
ok 91 - source guard: denied notification is not marked
  ---
  duration_ms: 0.068141
  ...
# Subtest: owner panel in the game: only for admins
ok 92 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.935261
  ...
# Subtest: web/game.html: the game script parses
ok 93 - web/game.html: the game script parses
  ---
  duration_ms: 7.290523
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 94 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.941019
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 95 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2469.758811
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 96 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.211635
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 97 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.041647
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 98 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 5.951862
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 99 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 6.097019
  ...
# Subtest: progress: levels and achievements
ok 100 - progress: levels and achievements
  ---
  duration_ms: 6.17183
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 101 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 1.945904
  ...
# Subtest: section title bar sticks to the top in the app too
ok 102 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.913739
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 103 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.942081
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 104 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.987278
  ...
1..104
# tests 104
# suites 0
# pass 89
# fail 0
# cancelled 0
# skipped 15
# todo 0
# duration_ms 2974.259359

```
## build
```text

BUILD SUCCESSFUL in 56s
33 actionable tasks: 33 executed
```
