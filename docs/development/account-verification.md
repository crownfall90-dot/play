# Account verification
Source: ee215868d8a6faced741da6c923aa6abd7e06278
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
orded # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.000105
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 37 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 2.124678
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 38 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.074207
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 39 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 825.713685
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 40 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 5.167589
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 41 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 0.93677
  ...
# Subtest: existing browser entry still selects Google web button
ok 42 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.050151
  ...
# Subtest: all inline JavaScript compiles
ok 43 - all inline JavaScript compiles
  ---
  duration_ms: 5.641722
  ...
# Subtest: impossible tiles use finite silent scan
ok 44 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.369196
  ...
# Subtest: finished marker is bounded and idempotent
ok 45 - finished marker is bounded and idempotent
  ---
  duration_ms: 11.878882
  ...
# Subtest: finished saved game is rejected and removed
ok 46 - finished saved game is rejected and removed
  ---
  duration_ms: 1.086595
  ...
# Subtest: active save is blocked in terminal phase
ok 47 - active save is blocked in terminal phase
  ---
  duration_ms: 0.874917
  ...
# Subtest: history replaces preliminary row with final row
ok 48 - history replaces preliminary row with final row
  ---
  duration_ms: 0.998222
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 49 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.269346
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 50 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.191328
  ...
# Subtest: duplicate start message has an explicit guard
ok 51 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.424048
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 52 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.377478
  ...
# Subtest: return from background routes terminal game home
ok 53 - return from background routes terminal game home
  ---
  duration_ms: 0.152389
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 54 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.326762
  ...
# Subtest: test source does not contain secret material
ok 55 - test source does not contain secret material
  ---
  duration_ms: 0.290076
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 56 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 1.971808
  ...
# Subtest: active legacy save remains compatible without localId
ok 57 - active legacy save remains compatible without localId
  ---
  duration_ms: 0.85675
  ...
# Subtest: invalid saved structure is rejected
ok 58 - invalid saved structure is rejected
  ---
  duration_ms: 1.583204
  ...
# Subtest: late final scoring cannot pay out into another game
ok 59 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.189395
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 60 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.23876
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 61 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.136655
  ...
# Subtest: historic placement skips the puff effect
ok 62 - historic placement skips the puff effect
  ---
  duration_ms: 0.158539
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 63 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.068249
  ...
# Subtest: source guard: concurrent announcements serialized
ok 64 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.143786
  ...
# Subtest: source guard: permission and disabled channel checked
ok 65 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.142514
  ...
# Subtest: source guard: denied notification is not marked
ok 66 - source guard: denied notification is not marked
  ---
  duration_ms: 0.122334
  ...
# Subtest: web/game.html: the game script parses
ok 67 - web/game.html: the game script parses
  ---
  duration_ms: 9.361619
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 68 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 884.421074
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 69 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.202214
  ...
# Subtest: progress: levels and achievements
ok 70 - progress: levels and achievements
  ---
  duration_ms: 10.672255
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 71 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 5.490685
  ...
1..71
# tests 71
# suites 0
# pass 70
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 1223.275404

```
## build
```text

BUILD SUCCESSFUL in 1m 3s
33 actionable tasks: 33 executed
```
