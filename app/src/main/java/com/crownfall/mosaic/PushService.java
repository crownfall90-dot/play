package com.crownfall.mosaic;

import android.content.Context;

import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

/**
 * Push from Firebase when a new version is released (sent by .github/workflows/android.yml).
 * The message carries the version code and "what's new"; the shared UpdateNotifier shows it,
 * so a version is announced once whether the push or the twice-daily check sees it first.
 */
public class PushService extends FirebaseMessagingService {

    /** Follows the "update notifications" setting. Does nothing in builds without Firebase config. */
    static void subscribe(Context c, boolean on) {
        if (FirebaseApp.getApps(c).isEmpty()) return;
        FirebaseMessaging fm = FirebaseMessaging.getInstance();
        if (on) fm.subscribeToTopic(BuildConfig.PUSH_TOPIC);
        else fm.unsubscribeFromTopic(BuildConfig.PUSH_TOPIC);
    }

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Map<String, String> d = message.getData();
        int code;
        try {
            code = Integer.parseInt(d.get("code"));
        } catch (Exception e) {
            return;
        }
        if (code <= BuildConfig.VERSION_CODE) return;
        UpdateNotifier.announce(this, code, d.get("version"), d.get("notes"));
    }

    @Override
    public void onNewToken(String token) {
        subscribe(this, UpdateNotifier.prefs(this).getBoolean("notify", true));
    }
}
