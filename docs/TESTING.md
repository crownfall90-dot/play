# Test environment: first stage

## Scope

Puzzlegrad Test is an OFFLINE test application, not a production release.
Its application ID is com.crownfall.mosaic.test. It has separate app storage,
backup disabled, no INTERNET permission and a no-op production updater.
Firebase auto-initialization and push/update services are removed from its manifest.
Production release workflows and main are not changed by this setup.

## Build and install

Pushes to setup/test-environment or dev and pull requests targeting main run
Test APK (offline). Download the Puzzlegrad-Test artifact from a successful
Actions run, extract it and install app-staging-debug.apk on the test phone.
No GitHub Release, Google Play upload, Pages deployment or player push is created.
GitHub Actions usage is subject to the account's existing billing/quota settings.

The build is debug-signed. Hosted runners can use different debug keys, so a
later test APK may require uninstalling the previous test app, deleting only
test saves. Do not uninstall the production app. Stable test signing is a
separate follow-up before relying on persistent test saves across CI builds.

## What to test

- First launch and tutorial.
- Full games with bots, scoring and end-game results.
- Save, close, relaunch and resume an offline game.
- Interface, settings, sound and Android back navigation.
- Verify that the production app and its saves remain untouched.

Online rooms, login, cloud saves, friends, notifications and self-updates
are intentionally unavailable. Do not enter real credentials or an owner
GitHub token. Inherited invite-link handlers are not yet isolated: do not
use production invite links with this test app or make it their default handler.

## Local build

Use a disposable checkout with app/google-services.json removed:

```sh
sh scripts/wrap-web.sh
./gradlew -I scripts/staging.init.gradle assembleStagingDebug
```

## Production release gate

Record the tested commit SHA from TEST-BUILD.txt and test results before
requesting a production release. This first stage does NOT enforce a
production approval gate or automatically promote the tested artifact.
Do not run Android APK or Web version until the owner approves the release.
Existing release instructions in README that describe automatic releases
on pushes to main are outdated; current production workflows are manual.

## Remaining work

A separate Firebase project/configuration and rules are required for online
testing; never reuse production Firebase for staging. Stable staging signing,
isolated deep links, production commit approval/enforcement and full build/device
verification remain follow-up work. A successful CI build is not a device test.
