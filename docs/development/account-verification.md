# Account verification
Source: 824ef5a7300c6b7e3aa3364b0fc7e3896f05a8b5
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
d # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.485422
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 34 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 4.856691
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 35 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 1.876029
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 36 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1518.566776
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 37 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 5.362131
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 38 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.420371
  ...
# Subtest: existing browser entry still selects Google web button
ok 39 - existing browser entry still selects Google web button
  ---
  duration_ms: 3.291191
  ...
# Subtest: all inline JavaScript compiles
ok 40 - all inline JavaScript compiles
  ---
  duration_ms: 8.650036
  ...
# Subtest: impossible tiles use finite silent scan
ok 41 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.423017
  ...
# Subtest: finished marker is bounded and idempotent
ok 42 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.258886
  ...
# Subtest: finished saved game is rejected and removed
ok 43 - finished saved game is rejected and removed
  ---
  duration_ms: 1.113461
  ...
# Subtest: active save is blocked in terminal phase
ok 44 - active save is blocked in terminal phase
  ---
  duration_ms: 0.965756
  ...
# Subtest: history replaces preliminary row with final row
ok 45 - history replaces preliminary row with final row
  ---
  duration_ms: 1.077804
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 46 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.30128
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 47 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.264291
  ...
# Subtest: duplicate start message has an explicit guard
ok 48 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.441932
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 49 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.428207
  ...
# Subtest: return from background routes terminal game home
ok 50 - return from background routes terminal game home
  ---
  duration_ms: 0.188971
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 51 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.487086
  ...
# Subtest: test source does not contain secret material
ok 52 - test source does not contain secret material
  ---
  duration_ms: 0.48407
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 53 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.931281
  ...
# Subtest: active legacy save remains compatible without localId
ok 54 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.044723
  ...
# Subtest: invalid saved structure is rejected
ok 55 - invalid saved structure is rejected
  ---
  duration_ms: 2.959082
  ...
# Subtest: late final scoring cannot pay out into another game
ok 56 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.352775
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 57 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.399543
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 58 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.246609
  ...
# Subtest: historic placement skips the puff effect
ok 59 - historic placement skips the puff effect
  ---
  duration_ms: 0.295259
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 60 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.213947
  ...
# Subtest: source guard: concurrent announcements serialized
ok 61 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.250356
  ...
# Subtest: source guard: permission and disabled channel checked
ok 62 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.262568
  ...
# Subtest: source guard: denied notification is not marked
ok 63 - source guard: denied notification is not marked
  ---
  duration_ms: 0.244525
  ...
# Subtest: web/game.html: the game script parses
ok 64 - web/game.html: the game script parses
  ---
  duration_ms: 17.473422
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 65 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1607.437363
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 66 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.318722
  ...
# Subtest: progress: levels and achievements
ok 67 - progress: levels and achievements
  ---
  duration_ms: 13.316221
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 68 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.188419
  ...
1..68
# tests 68
# suites 0
# pass 67
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 2053.477412

```
## build
```text

BUILD SUCCESSFUL in 1m 28s
33 actionable tasks: 33 executed
```
