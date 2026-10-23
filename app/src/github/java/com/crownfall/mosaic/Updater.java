package com.crownfall.mosaic;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import androidx.core.content.FileProvider;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

/** GitHub build: checks GitHub Releases, shows "what's new" in the game and installs the APK. */
class Updater {
    private final MainActivity activity;
    private File pendingApk;

    Updater(MainActivity activity) {
        this.activity = activity;
    }

    /** Latest GitHub release newer than this build, or null. Tags look like v123 where 123 is the versionCode. */
    private static JSONObject latest() throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(
                "https://api.github.com/repos/" + BuildConfig.UPDATE_REPO + "/releases/latest").openConnection();
        c.setRequestProperty("Accept", "application/vnd.github+json");
        c.setConnectTimeout(8000);
        c.setReadTimeout(8000);
        if (c.getResponseCode() != 200) return null;
        String body;
        try (Scanner sc = new Scanner(c.getInputStream(), "UTF-8").useDelimiter("\\A")) {
            body = sc.hasNext() ? sc.next() : "";
        }
        JSONObject rel = new JSONObject(body);
        int code = Integer.parseInt(rel.getString("tag_name").replaceAll("[^0-9]", ""));
        if (code <= BuildConfig.VERSION_CODE) return null;
        String url = null;
        JSONArray assets = rel.getJSONArray("assets");
        for (int i = 0; i < assets.length(); i++) {
            JSONObject a = assets.getJSONObject(i);
            if (a.getString("name").endsWith(".apk")) url = a.getString("browser_download_url");
        }
        if (url == null) return null;
        JSONObject info = new JSONObject();
        info.put("code", code);
        info.put("version", rel.optString("name", "1.0." + code));
        info.put("notes", rel.optString("body", ""));
        info.put("url", url);
        return info;
    }

    /** On launch (and from Settings): offer the newer version in the game. */
    void check(boolean manual) {
        new Thread(() -> {
            JSONObject info = null;
            try {
                info = latest();
            } catch (Exception ignored) {
                // No internet: play offline.
            }
            if (info != null) activity.js("window.onUpdateAvailable && window.onUpdateAvailable(" + info + ", " + manual + ")");
            else if (manual) activity.js("window.onNoUpdate && window.onNoUpdate()");
        }).start();
    }

    /** Background check for the update notification. */
    static void findUpdate(android.content.Context c, UpdateNotifier.Found cb) {
        new Thread(() -> {
            try {
                JSONObject info = latest();
                if (info != null) { cb.found(info.getInt("code"), info.getString("version"), info.getString("notes")); return; }
            } catch (Exception ignored) {
            }
            cb.found(0, "", "");
        }).start();
    }

    void onResume() {
        // Returning from the "allow installs from this source" screen.
        if (pendingApk != null && canInstall()) {
            File apk = pendingApk;
            pendingApk = null;
            install(apk);
        }
    }

    void download(String url) {
        new Thread(() -> {
            try {
                File dir = new File(activity.getCacheDir(), "updates");
                dir.mkdirs();
                File apk = new File(dir, "update.apk");
                HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
                c.setInstanceFollowRedirects(true);
                long total = c.getContentLengthLong();
                try (InputStream in = c.getInputStream(); OutputStream out = new FileOutputStream(apk)) {
                    byte[] buf = new byte[64 * 1024];
                    long done = 0;
                    int n, last = -1;
                    while ((n = in.read(buf)) > 0) {
                        out.write(buf, 0, n);
                        done += n;
                        int pct = total > 0 ? (int) (done * 100 / total) : 50;
                        if (pct != last) { last = pct; activity.js("window.onUpdateProgress && window.onUpdateProgress(" + pct + ")"); }
                    }
                }
                activity.runOnUiThread(() -> {
                    if (canInstall()) install(apk);
                    else {
                        pendingApk = apk;
                        activity.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                                Uri.parse("package:" + activity.getPackageName())));
                    }
                });
            } catch (Exception e) {
                activity.js("window.onUpdateError && window.onUpdateError('Не получилось скачать обновление')");
            }
        }).start();
    }

    private boolean canInstall() {
        return Build.VERSION.SDK_INT < Build.VERSION_CODES.O || activity.getPackageManager().canRequestPackageInstalls();
    }

    private void install(File apk) {
        Uri uri = FileProvider.getUriForFile(activity, activity.getPackageName() + ".files", apk);
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setDataAndType(uri, "application/vnd.android.package-archive");
        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
        activity.startActivity(i);
    }
}
