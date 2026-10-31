# Account verification
Source: 8d2cd654040763e022b1e91514b5ab2d00efc690
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
puff effect
ok 82 - historic placement skips the puff effect
  ---
  duration_ms: 0.176833
  ...
# Subtest: net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going
ok 83 - net auth: only the seat owner moves; strangers and unsigned messages are ignored; the game keeps going # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.271791
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 84 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 11.998016
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 85 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 0.748153
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 86 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.471762
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 87 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 1.960266
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 88 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.26361
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 89 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.269208
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 90 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.312532
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 91 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.765889
  ...
# Subtest: source guard: concurrent announcements serialized
ok 92 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.09429
  ...
# Subtest: source guard: permission and disabled channel checked
ok 93 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.119908
  ...
# Subtest: source guard: denied notification is not marked
ok 94 - source guard: denied notification is not marked
  ---
  duration_ms: 0.072107
  ...
# Subtest: owner panel in the game: only for admins
ok 95 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.877786
  ...
# Subtest: web/game.html: the game script parses
ok 96 - web/game.html: the game script parses
  ---
  duration_ms: 9.730313
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 97 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 0.993117
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 98 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 916.059663
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 99 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.192807
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 100 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.48616
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 101 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.049378
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 102 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 14.755747
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 103 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.613907
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 104 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 2.924319
  ...
# Subtest: progress: levels and achievements
ok 105 - progress: levels and achievements
  ---
  duration_ms: 11.717228
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 106 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 6.854996
  ...
# Subtest: section title bar sticks to the top in the app too
ok 107 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.354104
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 108 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.180155
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 109 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 5.453382
  ...
1..109
# tests 109
# suites 0
# pass 92
# fail 0
# cancelled 0
# skipped 17
# todo 0
# duration_ms 1517.574074

```
## build
```text

BUILD SUCCESSFUL in 1m 10s
33 actionable tasks: 33 executed
```
