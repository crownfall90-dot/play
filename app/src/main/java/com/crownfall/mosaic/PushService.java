package com.crownfall.mosaic;

import android.content.Context;
import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import java.util.Map;

/** Receives release updates and owner news; display is handled by UpdateNotifier. */
public class PushService extends FirebaseMessagingService {
    /** Retains the existing two topics and records subscription and unsubscription results. */
    static void subscribe(Context c, boolean on) {
        PushDiagnostics.setEnabled(c, on);
    }

    static final String NEWS_TOPIC = "news";

    /** Owner test topic remains independent of normal notification subscriptions. */
    static void testTopic(Context c, boolean on) {
        if (FirebaseApp.getApps(c).isEmpty()) return;
        if (on) FirebaseMessaging.getInstance().subscribeToTopic("news-test");
        else FirebaseMessaging.getInstance().unsubscribeFromTopic("news-test");
    }

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Map<String, String> d = message.getData();
        if ("news".equals(d.get("type"))) {
            if (UpdateNotifier.prefs(this).getBoolean("notify", true)) UpdateNotifier.news(this, d.get("title"), d.get("body"));
            return;
        }
        int code;
        try { code = Integer.parseInt(d.get("code")); } catch (Exception e) { return; }
        if (code <= BuildConfig.VERSION_CODE) return;
        MainActivity open = MainActivity.visible();
        if (open != null) open.runOnUiThread(open::checkSoon);
        else UpdateNotifier.announce(this, code, d.get("version"), d.get("notes"));
    }

    @Override
    public void onNewToken(String token) {
        subscribe(this, UpdateNotifier.prefs(this).getBoolean("notify", true));
    }
}
