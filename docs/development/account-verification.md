# Account verification
Source: b15347f1d9efd305c944ee884494a8239b510d84
Tests exit code: 0
Offline assembleStagingDebug exit code: 0
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
est: existing browser entry still selects Google web button
ok 50 - existing browser entry still selects Google web button
  ---
  duration_ms: 1.522579
  ...
# Subtest: graphics switch: decor of placed cards is redrawn, the game stays
ok 51 - graphics switch: decor of placed cards is redrawn, the game stays # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 2.503089
  ...
# Subtest: all inline JavaScript compiles
ok 52 - all inline JavaScript compiles
  ---
  duration_ms: 7.75677
  ...
# Subtest: impossible tiles use finite silent scan
ok 53 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.538525
  ...
# Subtest: finished marker is bounded and idempotent
ok 54 - finished marker is bounded and idempotent
  ---
  duration_ms: 18.063716
  ...
# Subtest: finished saved game is rejected and removed
ok 55 - finished saved game is rejected and removed
  ---
  duration_ms: 1.233796
  ...
# Subtest: active save is blocked in terminal phase
ok 56 - active save is blocked in terminal phase
  ---
  duration_ms: 1.260796
  ...
# Subtest: history replaces preliminary row with final row
ok 57 - history replaces preliminary row with final row
  ---
  duration_ms: 1.384128
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 58 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.382932
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 59 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.367763
  ...
# Subtest: duplicate start message has an explicit guard
ok 60 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.458073
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 61 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.552581
  ...
# Subtest: return from background routes terminal game home
ok 62 - return from background routes terminal game home
  ---
  duration_ms: 0.230584
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 63 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 1.32647
  ...
# Subtest: test source does not contain secret material
ok 64 - test source does not contain secret material
  ---
  duration_ms: 0.448806
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 65 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 2.674621
  ...
# Subtest: active legacy save remains compatible without localId
ok 66 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.307284
  ...
# Subtest: invalid saved structure is rejected
ok 67 - invalid saved structure is rejected
  ---
  duration_ms: 2.99727
  ...
# Subtest: late final scoring cannot pay out into another game
ok 68 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.447163
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 69 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.532714
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 70 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.33946
  ...
# Subtest: historic placement skips the puff effect
ok 71 - historic placement skips the puff effect
  ---
  duration_ms: 0.30251
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 72 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 2.216127
  ...
# Subtest: source guard: concurrent announcements serialized
ok 73 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.2177
  ...
# Subtest: source guard: permission and disabled channel checked
ok 74 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.242998
  ...
# Subtest: source guard: denied notification is not marked
ok 75 - source guard: denied notification is not marked
  ---
  duration_ms: 0.199506
  ...
# Subtest: web/game.html: the game script parses
ok 76 - web/game.html: the game script parses
  ---
  duration_ms: 13.441465
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 77 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 2034.917583
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 78 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.283774
  ...
# Subtest: art module exports what the game uses, and the game takes it from the bundle
ok 79 - art module exports what the game uses, and the game takes it from the bundle
  ---
  duration_ms: 6.659132
  ...
# Subtest: catalog: figure keys and prices are stable; one free figure; locations have art
ok 80 - catalog: figure keys and prices are stable; one free figure; locations have art
  ---
  duration_ms: 10.185227
  ...
# Subtest: config: palette, modes, rules and settings keep their keys
ok 81 - config: palette, modes, rules and settings keep their keys
  ---
  duration_ms: 11.034495
  ...
# Subtest: progress: levels and achievements
ok 82 - progress: levels and achievements
  ---
  duration_ms: 10.773997
  ...
# Subtest: progress: three different daily quests, every quest comes up evenly over a year
ok 83 - progress: three different daily quests, every quest comes up evenly over a year
  ---
  duration_ms: 3.555602
  ...
# Subtest: water edges: every water side has the river mouth, every pair lines up in all turns
ok 84 - water edges: every water side has the river mouth, every pair lines up in all turns # SKIP playwright is not installed (npm ci)
  ---
  duration_ms: 1.737795
  ...
1..84
# tests 84
# suites 0
# pass 81
# fail 0
# cancelled 0
# skipped 3
# todo 0
# duration_ms 2554.649314

```
## build
```text

BUILD SUCCESSFUL in 1m 35s
33 actionable tasks: 33 executed
```
