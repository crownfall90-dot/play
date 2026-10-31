# Account verification
Source: 0331f8e118a5e64d3c83e9e34562ab1a964729db
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ructure is rejected
  ---
  duration_ms: 2.173673
  ...
# Subtest: late final scoring cannot pay out into another game
ok 78 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.267588
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 79 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 1.482505
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 80 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.623848
  ...
# Subtest: historic placement skips the puff effect
ok 81 - historic placement skips the puff effect
  ---
  duration_ms: 0.274188
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 82 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 10.539927
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 83 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.670307
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 84 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.533383
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 85 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.51932
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 86 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.309217
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 87 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.420102
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 88 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.312963
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 89 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.820771
  ...
# Subtest: source guard: concurrent announcements serialized
ok 90 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.097535
  ...
# Subtest: source guard: permission and disabled channel checked
ok 91 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.123434
  ...
# Subtest: source guard: denied notification is not marked
ok 92 - source guard: denied notification is not marked
  ---
  duration_ms: 0.077245
  ...
# Subtest: owner panel in the game: only for admins
ok 93 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.320805
  ...
# Subtest: web/game.html: the game script parses
ok 94 - web/game.html: the game script parses
  ---
  duration_ms: 8.941179
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 95 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.994449
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 96 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1187.571729
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 97 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.199987
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 98 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.612326
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 99 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 7.152288
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 100 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 6.863469
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 101 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.360781
  ...
# Subtest: progress: levels and achievements
ok 102 - progress: levels and achievements
  ---
  duration_ms: 6.325779
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 103 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.105381
  ...
# Subtest: section title bar sticks to the top in the app too
ok 104 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.157702
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 105 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.979147
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 106 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.011384
  ...
1..106
# tests 106
# suites 0
# pass 91
# fail 0
# cancelled 0
# skipped 15
# todo 0
# duration_ms 1788.654972

```
## build
```text

BUILD SUCCESSFUL in 55s
33 actionable tasks: 33 executed
```
