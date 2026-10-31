# Account verification
Source: 986de60d0cbd8a55c3f413451c6de4baa5395d65
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
structure is rejected
  ---
  duration_ms: 1.600405
  ...
# Subtest: late final scoring cannot pay out into another game
ok 79 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.214771
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 80 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.256774
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 81 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.136405
  ...
# Subtest: historic placement skips the puff effect
ok 82 - historic placement skips the puff effect
  ---
  duration_ms: 0.179679
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 83 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 7.94708
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 84 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.872375
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 85 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.596052
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 86 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.080263
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 87 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.96859
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 88 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.969751
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 89 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.919706
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 90 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.774509
  ...
# Subtest: source guard: concurrent announcements serialized
ok 91 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.099018
  ...
# Subtest: source guard: permission and disabled channel checked
ok 92 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.090826
  ...
# Subtest: source guard: denied notification is not marked
ok 93 - source guard: denied notification is not marked
  ---
  duration_ms: 0.066759
  ...
# Subtest: owner panel in the game: only for admins
ok 94 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.917432
  ...
# Subtest: web/game.html: the game script parses
ok 95 - web/game.html: the game script parses
  ---
  duration_ms: 7.058211
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 96 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.981619
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 97 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2372.126573
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 98 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.226919
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 99 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.208724
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 100 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 6.594517
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 101 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 7.272481
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 102 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 1.890869
  ...
# Subtest: progress: levels and achievements
ok 103 - progress: levels and achievements
  ---
  duration_ms: 6.51641
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 104 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.060724
  ...
# Subtest: section title bar sticks to the top in the app too
ok 105 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.418102
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 106 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.087256
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 107 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.052524
  ...
1..107
# tests 107
# suites 0
# pass 92
# fail 0
# cancelled 0
# skipped 15
# todo 0
# duration_ms 2921.917748

```
## build
```text

BUILD SUCCESSFUL in 1m 5s
33 actionable tasks: 33 executed
```
