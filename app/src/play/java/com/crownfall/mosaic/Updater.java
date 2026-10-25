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
    /** When Play's update screen was last shown; a declined update is offered again after 30 minutes. */
    private long lastOffer;

    Updater(MainActivity activity) {
        this.activity = activity;
        this.manager = AppUpdateManagerFactory.create(activity);
    }

    /** On launch (and from Settings): if Google Play has a newer version, open its update screen. */
    void check(boolean manual) {
        manager.getAppUpdateInfo().addOnSuccessListener(info -> {
            int st = info.updateAvailability();
            // A screen the player closed with "not now" leaves the update "in progress" for Play: still an update.
            boolean newer = st == UpdateAvailability.UPDATE_AVAILABLE || st == UpdateAvailability.DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS;
            if (newer && info.isUpdateTypeAllowed(AppUpdateType.IMMEDIATE)) {
                if (manual || System.currentTimeMillis() - lastOffer > 30 * 60 * 1000L) start(info);
                else activity.js("window.onUpdateChecked && window.onUpdateChecked(false)");
            } else if (newer && manual) {
                openStore();
            } else {
                activity.js(manual ? "window.onNoUpdate && window.onNoUpdate()" : "window.onUpdateChecked && window.onUpdateChecked(false)");
            }
        }).addOnFailureListener(e -> {
            activity.js(manual ? "window.onCheckFailed && window.onCheckFailed()" : "window.onUpdateChecked && window.onUpdateChecked(false)");
        });
    }

    /** Play would not open its own update screen: send the player to the store page. */
    private void openStore() {
        try {
            activity.startActivity(new android.content.Intent(android.content.Intent.ACTION_VIEW,
                    android.net.Uri.parse("market://details?id=" + activity.getPackageName())));
        } catch (Exception e) {
            activity.js("window.onCheckFailed && window.onCheckFailed()");
        }
    }

    /** Background check for the update notification. */
    static void findUpdate(android.content.Context c, UpdateNotifier.Found cb) {
        AppUpdateManagerFactory.create(c).getAppUpdateInfo()
                .addOnSuccessListener(info -> cb.found(
                        info.updateAvailability() == UpdateAvailability.UPDATE_AVAILABLE ? info.availableVersionCode() : 0, "", ""))
                .addOnFailureListener(e -> cb.found(0, "", ""));
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
        lastOffer = System.currentTimeMillis();
        try {
            manager.startUpdateFlowForResult(info, activity,
                    AppUpdateOptions.newBuilder(AppUpdateType.IMMEDIATE).build(), REQUEST);
        } catch (android.content.IntentSender.SendIntentException ignored) {
            // Play could not open its update screen; the next launch tries again.
        }
    }
}
