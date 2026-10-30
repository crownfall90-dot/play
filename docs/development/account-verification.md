# Account verification
Source: 606454c0c2f808cc56e8ea10fbb75799ce5e153e
Tests exit code: 0
Offline assembleStagingDebug exit code: 1
No APK publication, FCM send, production Firebase access, main change or signing-key rotation.
## tests
```text
separates title and complete explanation
  ---
  duration_ms: 2.111621
  ...
# Subtest: plain text and angle brackets are not stripped
ok 15 - plain text and angle brackets are not stripped
  ---
  duration_ms: 0.420054
  ...
# Subtest: unexpected markup is never interpreted as rich content
ok 16 - unexpected markup is never interpreted as rich content
  ---
  duration_ms: 0.258192
  ...
# Subtest: actual confirmBox creates separate text nodes and preserves one-shot confirmation
ok 17 - actual confirmBox creates separate text nodes and preserves one-shot confirmation
  ---
  duration_ms: 1.620364
  ...
# Subtest: explicit native button uses dedicated Google option (source check)
ok 18 - explicit native button uses dedicated Google option (source check)
  ---
  duration_ms: 2.047642
  ...
# Subtest: actual Java error classifier separates cancellation, missing credentials and failure
ok 19 - actual Java error classifier separates cancellation, missing credentials and failure
  ---
  duration_ms: 1138.009417
  ...
# Subtest: native errors reach failure callback; only real cancellation is silent
ok 20 - native errors reach failure callback; only real cancellation is silent
  ---
  duration_ms: 5.347791
  ...
# Subtest: synchronous bridge failure is visible and allows another attempt
ok 21 - synchronous bridge failure is visible and allows another attempt
  ---
  duration_ms: 1.023771
  ...
# Subtest: existing browser entry still selects Google web button
ok 22 - existing browser entry still selects Google web button
  ---
  duration_ms: 3.395567
  ...
# Subtest: all inline JavaScript compiles
ok 23 - all inline JavaScript compiles
  ---
  duration_ms: 15.534532
  ...
# Subtest: impossible tiles use finite silent scan
ok 24 - impossible tiles use finite silent scan
  ---
  duration_ms: 0.746463
  ...
# Subtest: placement probe stops on first legal rotation
ok 25 - placement probe stops on first legal rotation
  ---
  duration_ms: 1.739816
  ...
# Subtest: finished marker is bounded and idempotent
ok 26 - finished marker is bounded and idempotent
  ---
  duration_ms: 23.984512
  ...
# Subtest: finished saved game is rejected and removed
ok 27 - finished saved game is rejected and removed
  ---
  duration_ms: 1.807744
  ...
# Subtest: active save is blocked in terminal phase
ok 28 - active save is blocked in terminal phase
  ---
  duration_ms: 1.471726
  ...
# Subtest: history replaces preliminary row with final row
ok 29 - history replaces preliminary row with final row
  ---
  duration_ms: 1.713548
  ...
# Subtest: remote move reserves its number before catch-up yield
ok 30 - remote move reserves its number before catch-up yield
  ---
  duration_ms: 0.54096
  ...
# Subtest: network queue rejects old and duplicate move numbers
ok 31 - network queue rejects old and duplicate move numbers
  ---
  duration_ms: 0.491337
  ...
# Subtest: duplicate start message has an explicit guard
ok 32 - duplicate start message has an explicit guard
  ---
  duration_ms: 0.547642
  ...
# Subtest: terminal marker precedes asynchronous final scoring
ok 33 - terminal marker precedes asynchronous final scoring
  ---
  duration_ms: 0.633161
  ...
# Subtest: return from background routes terminal game home
ok 34 - return from background routes terminal game home
  ---
  duration_ms: 0.301553
  ...
# Subtest: confirmation dialog is singleton and actions are one-shot
ok 35 - confirmation dialog is singleton and actions are one-shot
  ---
  duration_ms: 0.582016
  ...
# Subtest: test source does not contain secret material
ok 36 - test source does not contain secret material
  ---
  duration_ms: 0.622462
  ...
# Subtest: malformed finished marker is ignored without crashing
ok 37 - malformed finished marker is ignored without crashing
  ---
  duration_ms: 3.386119
  ...
# Subtest: active legacy save remains compatible without localId
ok 38 - active legacy save remains compatible without localId
  ---
  duration_ms: 1.797655
  ...
# Subtest: invalid saved structure is rejected
ok 39 - invalid saved structure is rejected
  ---
  duration_ms: 6.883226
  ...
# Subtest: late final scoring cannot pay out into another game
ok 40 - late final scoring cannot pay out into another game
  ---
  duration_ms: 0.873911
  ...
# Subtest: dialog uses full text safely and disposes the previous listener
ok 41 - dialog uses full text safely and disposes the previous listener
  ---
  duration_ms: 0.447044
  ...
# Subtest: replay suppresses opening effects before the initial tile
ok 42 - replay suppresses opening effects before the initial tile
  ---
  duration_ms: 0.513017
  ...
# Subtest: historic placement skips the puff effect
ok 43 - historic placement skips the puff effect
  ---
  duration_ms: 0.259484
  ...
# Subtest: source guard: mark only after Android accepts submission
ok 44 - source guard: mark only after Android accepts submission
  ---
  duration_ms: 1.521619
  ...
# Subtest: source guard: concurrent announcements serialized
ok 45 - source guard: concurrent announcements serialized
  ---
  duration_ms: 0.168225
  ...
# Subtest: source guard: permission and disabled channel checked
ok 46 - source guard: permission and disabled channel checked
  ---
  duration_ms: 0.226132
  ...
# Subtest: source guard: denied notification is not marked
ok 47 - source guard: denied notification is not marked
  ---
  duration_ms: 0.153737
  ...
# Subtest: actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
ok 48 - actual Java diagnostics: success, failure, disable, stale completion, synchronous error, offline configuration
  ---
  duration_ms: 1277.127225
  ...
# Subtest: production subscription path uses diagnostics without persisting tokens (source check)
ok 49 - production subscription path uses diagnostics without persisting tokens (source check)
  ---
  duration_ms: 0.28889
  ...
1..49
# tests 49
# suites 0
# pass 49
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 1564.487359

```
## build
```text

FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'Puzzlegrad'.
> Could not resolve all artifacts for configuration ':classpath'.
   > Could not resolve org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.9.20.
     Required by:
         root project : > com.android.application:com.android.application.gradle.plugin:8.7.3 > com.android.tools.build:gradle:8.7.3

BUILD FAILED in 10s
```
