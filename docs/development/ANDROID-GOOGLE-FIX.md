# Android Google button fix

This bounded patch uses GetSignInWithGoogleOption for an explicit native sign-in button, separates cancellation from NoCredentialException, and forwards native failure/cancellation to the existing failure callback. Synchronous bridge exceptions produce visible feedback. Existing Firebase token exchange and browser sign-in remain in place. No OAuth console settings, profile migration, wallet, main branch or signing keys are changed.

Tests execute the actual Java error classifier using test exception doubles and the actual startGoogle JavaScript function with mocked native/browser endpoints. They do not simulate Android Credential Manager UI or verify OAuth configuration. Workflow commits these files only after all tests and offline assembleStagingDebug pass. A green build is not proof of success on the owner's phone. No APK is published by this workflow.

Still open: real Android login, installed-version confirmation, package/certificate OAuth checks if login reports configuration failure, session expiry, duplicate/late token protection and account-switch isolation. This is not completion of the entire auth stage.
