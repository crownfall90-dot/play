package com.crownfall.mosaic;

import android.content.Context;
import android.content.SharedPreferences;
import com.google.android.gms.tasks.Task;
import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;

/** Local topic-request diagnostics. Success is not proof of notification delivery.
 * No registration tokens, message bodies or exception messages are persisted. */
public final class PushDiagnostics {
    private static final String PREFS = "push_diagnostics";
    private PushDiagnostics() {}

    public static synchronized void setEnabled(Context context, boolean enabled) {
        Context app = context.getApplicationContext();
        SharedPreferences p = app.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        boolean available = !FirebaseApp.getApps(app).isEmpty();
        p.edit().putBoolean("configured", available).putBoolean("desiredEnabled", enabled).apply();
        if (!available) return;
        request(p, BuildConfig.PUSH_TOPIC, enabled);
        request(p, PushService.NEWS_TOPIC, enabled);
    }

    private static void request(SharedPreferences p, String topic, boolean enabled) {
        String key = topic + ".";
        long revision = p.getLong(key + "revision", 0) + 1;
        p.edit().putLong(key + "revision", revision).putBoolean(key + "enabled", enabled)
            .putString(key + "state", "pending").putString(key + "error", "")
            .putLong(key + "updatedAt", System.currentTimeMillis()).apply();
        try {
            FirebaseMessaging fm = FirebaseMessaging.getInstance();
            Task<Void> task = enabled ? fm.subscribeToTopic(topic) : fm.unsubscribeFromTopic(topic);
            task.addOnCompleteListener(result -> finish(p, key, revision,
                result.isSuccessful() ? "success" : "failed", result.isSuccessful() ? "" : "task_failed"));
        } catch (RuntimeException error) { finish(p, key, revision, "failed", "request_failed"); }
    }

    private static synchronized void finish(SharedPreferences p, String key, long revision, String state, String error) {
        if (p.getLong(key + "revision", 0) != revision) return;
        p.edit().putString(key + "state", state).putString(key + "error", error)
            .putLong(key + "updatedAt", System.currentTimeMillis()).apply();
    }
}
