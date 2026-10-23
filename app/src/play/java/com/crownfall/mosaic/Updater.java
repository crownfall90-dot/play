package com.crownfall.mosaic;

import com.google.android.play.core.appupdate.AppUpdateManager;
import com.google.android.play.core.appupdate.AppUpdateManagerFactory;
import com.google.android.play.core.appupdate.AppUpdateOptions;
import com.google.android.play.core.install.model.AppUpdateType;
import com.google.android.play.core.install.model.UpdateAvailability;

/** Google Play build: Play shows its own "update available" screen; the app never installs APKs itself. */
class Updater {
    private static final int REQUEST = 7001;
    private final MainActivity activity;
    private final AppUpdateManager manager;

    Updater(MainActivity activity) {
        this.activity = activity;
        this.manager = AppUpdateManagerFactory.create(activity);
    }

    void check() {
        manager.getAppUpdateInfo().addOnSuccessListener(info -> {
            if (info.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE
                    && info.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
                start(info);
            }
        });
    }

    void onResume() {
        // Finish an update the player started but left half way.
        manager.getAppUpdateInfo().addOnSuccessListener(info -> {
            if (info.updateAvailability() == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS) start(info);
        });
    }

    void download(String url) {
        // Not used: updates come from Google Play.
    }

    private void start(com.google.android.play.core.appupdate.AppUpdateInfo info) {
        try {
            manager.startUpdateFlowForResult(info, activity,
                    AppUpdateOptions.newBuilder(AppUpdateType.IMMEDIATE).build(), REQUEST);
        } catch (android.content.IntentSender.SendIntentException ignored) {
            // Play could not open its update screen; the next launch tries again.
        }
    }
}
