package com.crownfall.mosaic;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.job.JobInfo;
import android.app.job.JobParameters;
import android.app.job.JobScheduler;
import android.app.job.JobService;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

/**
 * Twice a day, with the game closed, asks the store whether a newer version exists
 * and shows a notification with what's new. Tapping it opens the game, which offers the update.
 */
public class UpdateNotifier extends JobService {
    private static final int JOB_ID = 42;
    private static final String CHANNEL = "updates";

    static SharedPreferences prefs(Context c) {
        return c.getSharedPreferences("puzzlegrad", MODE_PRIVATE);
    }

    static void schedule(Context c) {
        JobScheduler js = (JobScheduler) c.getSystemService(Context.JOB_SCHEDULER_SERVICE);
        if (js.getPendingJob(JOB_ID) != null) return;
        js.schedule(new JobInfo.Builder(JOB_ID, new ComponentName(c, UpdateNotifier.class))
                .setPeriodic(12 * 60 * 60 * 1000L)
                .setRequiredNetworkType(JobInfo.NETWORK_TYPE_ANY)
                .setPersisted(true)
                .build());
    }

    static void setEnabled(Context c, boolean on) {
        prefs(c).edit().putBoolean("notify", on).apply();
    }

    @Override
    public boolean onStartJob(JobParameters params) {
        if (!prefs(this).getBoolean("notify", true)) return false;
        Updater.findUpdate(this, (code, version, notes) -> {
            if (code > 0 && prefs(this).getInt("notified", 0) < code) {
                show(this, version, notes);
                prefs(this).edit().putInt("notified", code).apply();
            }
            jobFinished(params, false);
        });
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters params) {
        return true;
    }

    private static void show(Context c, String version, String notes) {
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= 26) {
            nm.createNotificationChannel(new NotificationChannel(CHANNEL, "Обновления игры", NotificationManager.IMPORTANCE_DEFAULT));
        }
        PendingIntent open = PendingIntent.getActivity(c, 0, new Intent(c, MainActivity.class)
                .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP), PendingIntent.FLAG_IMMUTABLE);
        String text = notes == null || notes.isEmpty() ? "Откройте игру, чтобы обновиться" : notes;
        Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(c, CHANNEL) : new Notification.Builder(c);
        nm.notify(1, b.setSmallIcon(R.drawable.ic_stat_update)
                .setContentTitle("Вышло обновление Puzzlegrad" + (version == null || version.isEmpty() ? "" : " " + version))
                .setContentText(text)
                .setStyle(new Notification.BigTextStyle().bigText(text))
                .setContentIntent(open)
                .setAutoCancel(true)
                .build());
    }

    interface Found {
        /** code is 0 when there is no newer version. */
        void found(int code, String version, String notes);
    }
}
