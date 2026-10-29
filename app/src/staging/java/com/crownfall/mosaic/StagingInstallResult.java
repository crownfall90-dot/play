package com.crownfall.mosaic;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInstaller;

/** Handles only the staging PackageInstaller callback. */
public class StagingInstallResult extends BroadcastReceiver {
    @Override public void onReceive(Context context, Intent intent) {
        int status = intent.getIntExtra(PackageInstaller.EXTRA_STATUS, PackageInstaller.STATUS_FAILURE);
        if (status == PackageInstaller.STATUS_PENDING_USER_ACTION) {
            Intent confirm = intent.getParcelableExtra(Intent.EXTRA_INTENT);
            if (confirm != null) {
                try { context.startActivity(confirm.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); }
                catch (Exception ignored) {}
            }
        } else if (status != PackageInstaller.STATUS_SUCCESS) {
            android.widget.Toast.makeText(context, "Установка тестового обновления отменена или не завершена", android.widget.Toast.LENGTH_LONG).show();
        }
    }
}
