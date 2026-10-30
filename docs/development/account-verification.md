# Account verification
Source: a0f65f9ac48a17ed4037012938a751fccee4d894
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
 # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.690523
  ...
# Subtest: golden games: the set covers rivers, lakes, the cliff and every table size
ok 36 - golden games: the set covers rivers, lakes, the cliff and every table size
  ---
  duration_ms: 3.957039
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 37 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 2.181366
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 38 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 2888.809069
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 39 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 6.007862
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 40 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.606559
  ...
# Subtest: existing browser entry still selects Google web button
ok 41 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.600587
  ...
# Subtest: all inline JavaScript compiles
ok 42 - all inline JavaScript compiles
  ---
  duration_ms: 8.221148
  ...
# Subtest: impossible tiles use finite silent scan
ok 43 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.531999
  ...
# Subtest: finished marker is bounded and idempotent
ok 44 - finished marker is bounded and idempotent
  ---
  duration_ms: 14.899095
  ...
# Subtest: finished saved game is rejected and removed
ok 45 - finished saved game is rejected and removed
  ---
  duration_ms: 1.170686
  ...
# Subtest: active save is blocked in terminal phase
ok 46 - active save is blocked in terminal phase
  ---
  duration_ms: 0.971005
  ...
# Subtest: history replaces preliminary row with final row
ok 47 - history replaces preliminary row with final row
  ---
  duration_ms: 1.124261
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 48 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.358687
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 49 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.23616
  ...
# Subtest: duplicate start message has an explicit guard
ok 50 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.419971
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 51 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.434879
  ...
# Subtest: return from background routes terminal game home
ok 52 - return from background routes terminal game home
  ---
  duration_ms: 0.187138
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 53 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.377903
  ...
# Subtest: test source does not contain secret material
ok 54 - test source does not contain secret material
  ---
  duration_ms: 0.448013
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 55 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 3.084125
  ...
# Subtest: active legacy save remains compatible without localId
ok 56 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.369146
  ...
# Subtest: invalid saved structure is rejected
ok 57 - invalid saved structure is rejected
  ---
  duration_ms: 3.351091
  ...
# Subtest: late final scoring cannot pay out into another game
ok 58 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.411114
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 59 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.485914
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 60 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.313773
  ...
# Subtest: historic placement skips the puff effect
ok 61 - historic placement skips the puff effect
  ---
  duration_ms: 0.352675
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 62 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.516991
  ...
# Subtest: source guard: concurrent announcements serialized
ok 63 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.167572
  ...
# Subtest: source guard: permission and disabled channel checked
ok 64 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.214649
  ...
# Subtest: source guard: denied notification is not marked
ok 65 - source guard: denied notification is not marked
  ---
  duration_ms: 0.213337
  ...
# Subtest: web/game.html: the game script parses
ok 66 - web/game.html: the game script parses
  ---
  duration_ms: 11.172195
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 67 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 3090.622112
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 68 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.361264
  ...
# Subtest: progress: levels and achievements
ok 69 - progress: levels and achievements
  ---
  duration_ms: 11.412251
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 70 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.256005
  ...
1..70
# tests 70
# suites 0
# pass 69
# fail 0
# cancelled 0
# skipped 1
# todo 0
# duration_ms 3539.022639

```
## build
```text

BUILD SUCCESSFUL in 1m 22s
33 actionable tasks: 33 executed
```
