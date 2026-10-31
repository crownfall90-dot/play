# Account verification
Source: 4d57e28aee6a6b84d60fd97b05d69c1493ebb830
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
is not installed (npm ci)
  ---
  duration_ms: 1.86181
  ...
# Subtest: net/firebase: a guest gets an anonymous account once, saved under fbAuth
ok 86 - net/firebase: a guest gets an anonymous account once, saved under fbAuth
  ---
  duration_ms: 15.871055
  ...
# Subtest: net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
ok 87 - net/firebase: an expired saved session is refreshed; a signed-in one is never replaced by a guest
  ---
  duration_ms: 1.20698
  ...
# Subtest: net/firebase: errors keep their old meaning
ok 88 - net/firebase: errors keep their old meaning
  ---
  duration_ms: 0.940594
  ...
# Subtest: net/firebase: game.html takes the session from the module, with no second copy
ok 89 - net/firebase: game.html takes the session from the module, with no second copy
  ---
  duration_ms: 3.429983
  ...
# Subtest: online flag: the start message says online or friends' room, so the header and the rewards are right everywhere
ok 90 - online flag: the start message says online or friends' room, so the header and the rewards are right everywhere # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.539664
  ...
# Subtest: peek: others see the card the mover holds, the mover sends it
ok 91 - peek: others see the card the mover holds, the mover sends it # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.688017
  ...
# Subtest: connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 92 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.710512
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 93 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.964882
  ...
# Subtest: source guard: concurrent announcements serialized
ok 94 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.254565
  ...
# Subtest: source guard: permission and disabled channel checked
ok 95 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.253873
  ...
# Subtest: source guard: denied notification is not marked
ok 96 - source guard: denied notification is not marked
  ---
  duration_ms: 0.259994
  ...
# Subtest: owner panel in the game: only for admins
ok 97 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.689859
  ...
# Subtest: web/game.html: the game script parses
ok 98 - web/game.html: the game script parses
  ---
  duration_ms: 16.993436
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 99 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.810234
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 100 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3461.762101
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 101 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.290521
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 102 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.710698
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 103 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.338924
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 104 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.712414
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 105 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 10.80422
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 106 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.169368
  ...
# Subtest: progress: levels and achievements
ok 107 - progress: levels and achievements
  ---
  duration_ms: 10.43485
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 108 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.777307
  ...
# Subtest: section title bar sticks to the top in the app too
ok 109 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.624848
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 110 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 58.712632
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 111 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 53.301806
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 112 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.838577
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 113 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.731607
  ...
1..113
# tests 113
# suites 0
# pass 95
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 4401.661523

```
## build
```text

BUILD SUCCESSFUL in 1m 30s
33 actionable tasks: 33 executed
```
