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
 * A message with type "news" is the owner's announcement to all players (.github/workflows/news.yml).
 */
public class PushService extends FirebaseMessagingService {

    /** Follows the "update notifications" setting. Does nothing in builds without Firebase config. */
    static void subscribe(Context c, boolean on) {
        if (FirebaseApp.getApps(c).isEmpty()) return;
        FirebaseMessaging fm = FirebaseMessaging.getInstance();
        if (on) { fm.subscribeToTopic(BuildConfig.PUSH_TOPIC); fm.subscribeToTopic(NEWS_TOPIC); }
        else { fm.unsubscribeFromTopic(BuildConfig.PUSH_TOPIC); fm.unsubscribeFromTopic(NEWS_TOPIC); }
    }

    static final String NEWS_TOPIC = "news";

    /** The owner's own phone also listens to "news-test" to try a message before sending it to all. */
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
        try {
            code = Integer.parseInt(d.get("code"));
        } catch (Exception e) {
            return;
        }
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
