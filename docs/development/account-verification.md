# Account verification
Source: a119bf1e2d9c800d5011844e3c2ab5746841b68b
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 98 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.40658
  ...
# Subtest: rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
ok 99 - rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
  ---
  duration_ms: 3.333701
  ...
# Subtest: lobby readiness: friends in room must press ready before host can start
ok 100 - lobby readiness: friends in room must press ready before host can start
  ---
  duration_ms: 3.356976
  ...
# Subtest: room header: cups game with friends displays рейтинговая игра under room
ok 101 - room header: cups game with friends displays рейтинговая игра under room
  ---
  duration_ms: 2.476405
  ...
# Subtest: android workflow: announces update in telegram and pushes via FCM
ok 102 - android workflow: announces update in telegram and pushes via FCM
  ---
  duration_ms: 0.27293
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 103 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.20697
  ...
# Subtest: source guard: concurrent announcements serialized
ok 104 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.182104
  ...
# Subtest: source guard: permission and disabled channel checked
ok 105 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.155202
  ...
# Subtest: source guard: denied notification is not marked
ok 106 - source guard: denied notification is not marked
  ---
  duration_ms: 0.112919
  ...
# Subtest: owner panel in the game: only for admins
ok 107 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.691718
  ...
# Subtest: web/game.html: the game script parses
ok 108 - web/game.html: the game script parses
  ---
  duration_ms: 14.006702
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 109 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.774352
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 110 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 774.348131
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 111 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.218928
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 112 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.883316
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 113 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 3.191388
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 114 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 2.757917
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 115 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.512869
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 116 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 9.623466
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 117 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 15.778987
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 118 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 3.294813
  ...
# Subtest: progress: levels and achievements
ok 119 - progress: levels and achievements
  ---
  duration_ms: 13.412691
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 120 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.640461
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 121 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.323305
  ...
# Subtest: section title bar sticks to the top in the app too
ok 122 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.347111
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 123 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 70.519805
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 124 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 85.245234
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 125 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.115173
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 126 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.811007
  ...
1..126
# tests 126
# suites 0
# pass 108
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 2147.843733

```
## build
```text

BUILD SUCCESSFUL in 52s
33 actionable tasks: 33 executed
```
