# Account verification
Source: 66be9490530a8b2cb70f3fb6f92c3d4a01e7a2e7
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
ses full text safely and disposes the previous listener
  ---
  duration_ms: 0.413855
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 81 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.243202
  ...
# Subtest: historic placement skips the puff effect
ok 82 - historic placement skips the puff effect
  ---
  duration_ms: 0.219687
  ...
# Subtest: net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going
ok 83 - net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.680509
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 84 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 8.206983
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 85 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.635475
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 86 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.549106
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 87 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 2.170948
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 88 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.435886
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 89 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.979186
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 90 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.020357
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 91 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.240725
  ...
# Subtest: source guard: concurrent announcements serialized
ok 92 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.16123
  ...
# Subtest: source guard: permission and disabled channel checked
ok 93 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.162061
  ...
# Subtest: source guard: denied notification is not marked
ok 94 - source guard: denied notification is not marked
  ---
  duration_ms: 0.123684
  ...
# Subtest: owner panel in the game: only for admins
ok 95 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.052305
  ...
# Subtest: web/game.html: the game script parses
ok 96 - web/game.html: the game script parses
  ---
  duration_ms: 10.944895
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 97 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.099586
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 98 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 815.959296
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 99 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.230032
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 100 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.77071
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 101 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.81854
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 102 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 12.906321
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 103 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.60575
  ...
# Subtest: progress: levels and achievements
ok 104 - progress: levels and achievements
  ---
  duration_ms: 10.732568
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 105 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.186508
  ...
# Subtest: section title bar sticks to the top in the app too
ok 106 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.511697
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 107 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.619078
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 108 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.667269
  ...
1..108
# tests 108
# suites 0
# pass 92
# fail 0
# cancelled 0
# skipped 16
# todo 0
# duration_ms 1497.184428

```
## build
```text

BUILD SUCCESSFUL in 1m 6s
33 actionable tasks: 33 executed
```
