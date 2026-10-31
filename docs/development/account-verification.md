# Account verification
Source: 7e26f85539a900f85f18d7a16a27ff03ea3b4174
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
s not installed (npm ci)
  ---
  duration_ms: 2.416888
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 85 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 16.693944
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 86 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.121776
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 87 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.814603
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 88 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 3.444669
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 89 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.836963
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 90 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.686221
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 91 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.672936
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 92 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.211894
  ...
# Subtest: source guard: concurrent announcements serialized
ok 93 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.249857
  ...
# Subtest: source guard: permission and disabled channel checked
ok 94 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.244978
  ...
# Subtest: source guard: denied notification is not marked
ok 95 - source guard: denied notification is not marked
  ---
  duration_ms: 0.287397
  ...
# Subtest: owner panel in the game: only for admins
ok 96 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.4018
  ...
# Subtest: web/game.html: the game script parses
ok 97 - web/game.html: the game script parses
  ---
  duration_ms: 11.932774
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 98 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.694006
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 99 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1257.769787
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 100 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.28393
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 101 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.413582
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 102 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 4.42436
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 103 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 15.388203
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 104 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 17.709723
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 105 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 5.240013
  ...
# Subtest: progress: levels and achievements
ok 106 - progress: levels and achievements
  ---
  duration_ms: 27.312291
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 107 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 17.882255
  ...
# Subtest: section title bar sticks to the top in the app too
ok 108 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.783784
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 109 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 104.886952
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 110 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 97.286252
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 111 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.644923
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 112 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.83545
  ...
1..112
# tests 112
# suites 0
# pass 94
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 2267.309704

```
## build
```text

BUILD SUCCESSFUL in 1m 17s
33 actionable tasks: 33 executed
```
