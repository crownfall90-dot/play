package com.crownfall.mosaic;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.annotation.NonNull;
import com.google.firebase.messaging.FirebaseMessaging;

/**
 * Records whether the device can request and retain an FCM topic subscription.
 * A completed callback means Firebase accepted the request; it does not prove that
 * Android displayed a later notification on this device.
 */
public final class PushDiagnostics {
    private static final String PREFS = "push_diagnostics";

    private PushDiagnostics() {}

    public interface Listener {
        void onResult(@NonNull Result result);
    }

    public static final class Result {
        public final boolean requested;
        public final boolean callbackCompleted;
        public final String tokenPresent;
        public final String error;

        Result(boolean requested, boolean callbackCompleted, String tokenPresent, String error) {
            this.requested = requested;
            this.callbackCompleted = callbackCompleted;
            this.tokenPresent = tokenPresent;
            this.error = error;
        }
    }

    public static void subscribeAndRecord(Context context, String topic, Listener listener) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        FirebaseMessaging.getInstance().subscribeToTopic(topic)
            .addOnCompleteListener(task -> {
                boolean ok = task.isSuccessful();
                String error = task.getException() == null ? "" : task.getException().getClass().getSimpleName();
                prefs.edit()
                    .putBoolean("lastSubscribeRequested", true)
                    .putBoolean("lastSubscribeCompleted", true)
                    .putBoolean("lastSubscribeSuccessful", ok)
                    .putString("lastSubscribeError", error)
                    .putLong("lastSubscribeAt", System.currentTimeMillis())
                    .apply();
                FirebaseMessaging.getInstance().getToken().addOnCompleteListener(tokenTask -> {
                    String tokenState = tokenTask.isSuccessful() && tokenTask.getResult() != null
                        ? "present" : "missing";
                    listener.onResult(new Result(true, true, tokenState, error));
                });
            });
    }

    static SharedPreferences prefs(Context context) {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }
}
