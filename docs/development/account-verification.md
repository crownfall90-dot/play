# Account verification
Source: 55fdf8edcac3ba8356811ca92b2f18143f29724f
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
alog instead of a silent wait; a dropped stream shows and hides "reconnecting"
ok 93 - connection: no server → a clear dialog instead of a silent wait; a dropped stream shows and hides "reconnecting" # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.666454
  ...
# Subtest: rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
ok 94 - rematch (N-5): game.html contains rematchClick, startRematch and handles rematch message
  ---
  duration_ms: 2.772071
  ...
# Subtest: lobby readiness: friends in room must press ready before host can start
ok 95 - lobby readiness: friends in room must press ready before host can start
  ---
  duration_ms: 2.7317
  ...
# Subtest: room header: cups game with friends displays рейтинговая игра under room
ok 96 - room header: cups game with friends displays рейтинговая игра under room
  ---
  duration_ms: 1.691813
  ...
# Subtest: android workflow: announces update in telegram and pushes via FCM
ok 97 - android workflow: announces update in telegram and pushes via FCM
  ---
  duration_ms: 0.173772
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 98 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 0.950784
  ...
# Subtest: source guard: concurrent announcements serialized
ok 99 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.115234
  ...
# Subtest: source guard: permission and disabled channel checked
ok 100 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.118579
  ...
# Subtest: source guard: denied notification is not marked
ok 101 - source guard: denied notification is not marked
  ---
  duration_ms: 0.104628
  ...
# Subtest: owner panel in the game: only for admins
ok 102 - owner panel in the game: only for admins # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.630049
  ...
# Subtest: web/game.html: the game script parses
ok 103 - web/game.html: the game script parses
  ---
  duration_ms: 11.688723
  ...
# Subtest: player log: events leave in a batch, with no addresses
ok 104 - player log: events leave in a batch, with no addresses # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.910923
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 105 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1262.385789
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 106 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.226111
  ...
# Subtest: reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update
ok 107 - reinstall: a release signed with another key opens the step-by-step reinstall, not the normal update # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.295594
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 108 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 2.548515
  ...
# Subtest: retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
ok 109 - retention & funnel (H-1, H-2): game logs funnel events and sends retention markers in presence
  ---
  duration_ms: 3.896909
  ...
# Subtest: retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
ok 110 - retention panel (H-2): founder-admin displays D1/D7 metrics and cohort breakdown
  ---
  duration_ms: 0.577591
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 111 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 7.146632
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 112 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 14.771844
  ...
# Subtest: config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
ok 113 - config: game sizes keep the playing time (fast ≈ 9, classic ≈ 15, big ≈ 30 minutes)
  ---
  duration_ms: 5.157089
  ...
# Subtest: progress: levels and achievements
ok 114 - progress: levels and achievements
  ---
  duration_ms: 8.62386
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 115 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 2.231035
  ...
# Subtest: progress: quest thresholds adjusted for fast 30-card mode
ok 116 - progress: quest thresholds adjusted for fast 30-card mode
  ---
  duration_ms: 0.215264
  ...
# Subtest: section title bar sticks to the top in the app too
ok 117 - section title bar sticks to the top in the app too # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.174371
  ...
# Subtest: telegram: message lists changes, escapes HTML, links
ok 118 - telegram: message lists changes, escapes HTML, links
  ---
  duration_ms: 75.451384
  ...
# Subtest: telegram: without secrets it skips quietly and never leaks
ok 119 - telegram: without secrets it skips quietly and never leaks
  ---
  duration_ms: 66.345106
  ...
# Subtest: tutorial: all steps, from the first card to the win
ok 120 - tutorial: all steps, from the first card to the win # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.693926
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 121 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.669228
  ...
1..121
# tests 121
# suites 0
# pass 103
# fail 0
# cancelled 0
# skipped 18
# todo 0
# duration_ms 2498.019642

```
## build
```text

BUILD SUCCESSFUL in 1m 5s
33 actionable tasks: 33 executed
```
