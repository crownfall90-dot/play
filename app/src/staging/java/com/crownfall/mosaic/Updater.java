package com.crownfall.mosaic;

import android.app.AlertDialog;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import org.json.JSONObject;
import java.io.*;
import java.net.*;
import java.security.MessageDigest;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

/** Dedicated staging channel. Network stays disabled until isolation is wired. */
class Updater {
    private static final String PACKAGE = "com.crownfall.mosaic.test";
    private static final String ROOT = "https://github.com/crownfall90-dot/play/releases/download/";
    private static final long MAX_APK = 128L * 1024 * 1024;
    private final MainActivity activity;
    private final AtomicBoolean checking = new AtomicBoolean();
    private final AtomicBoolean downloading = new AtomicBoolean();
    private volatile JSONObject offered;
    private File pending;

    Updater(MainActivity activity) { this.activity = activity; }

    private static HttpURLConnection open(String address) throws Exception {
        URL url = new URL(address);
        Set<String> hosts = new HashSet<>(Arrays.asList(
                "github.com", "release-assets.githubusercontent.com",
                "objects.githubusercontent.com"));
        for (int redirect = 0; redirect < 6; redirect++) {
            if (!"https".equals(url.getProtocol()) || !hosts.contains(url.getHost())
                    || (url.getPort() != -1 && url.getPort() != 443) || url.getUserInfo() != null)
                throw new IOException("Untrusted update endpoint");
            HttpURLConnection c = (HttpURLConnection) url.openConnection();
            c.setInstanceFollowRedirects(false);
            c.setConnectTimeout(15000); c.setReadTimeout(30000);
            c.setUseCaches(false); c.setRequestProperty("Cache-Control", "no-cache");
            int status = c.getResponseCode();
            if (status == 200) return c;
            String location = c.getHeaderField("Location");
            c.disconnect();
            if (status < 300 || status > 399 || location == null)
                throw new IOException("Update HTTP error");
            url = new URL(url, location);
        }
        throw new IOException("Too many redirects");
    }

    private static JSONObject latest() throws Exception {
        HttpURLConnection c = open(ROOT + "test-latest/latest.json?t=" + System.currentTimeMillis());
        JSONObject info;
        try (InputStream in = c.getInputStream(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            byte[] bytes = new byte[4096]; int n;
            while ((n = in.read(bytes)) != -1) {
                if (out.size() + n > 65536) throw new IOException("Metadata too large");
                out.write(bytes, 0, n);
            }
            info = new JSONObject(out.toString("UTF-8"));
        } finally { c.disconnect(); }
        if (!"staging".equals(info.getString("channel"))
                || !PACKAGE.equals(info.getString("package")))
            throw new IOException("Wrong update channel");
        String url = info.getString("url");
        if (!url.matches("https://github\\.com/crownfall90-dot/play/releases/download/test-v[0-9]+/Puzzlegrad-Test\\.apk"))
            throw new IOException("Wrong test APK URL");
        if (!info.getString("sha256").matches("[a-f0-9]{64}"))
            throw new IOException("Missing APK checksum");
        return info.getInt("code") > BuildConfig.VERSION_CODE ? info : null;
    }

    void check(boolean manual) {
        if (!checking.compareAndSet(false, true)) return;
        new Thread(() -> {
            try {
                JSONObject info = latest();
                offered = info;
                activity.runOnUiThread(() -> {
                    if (activity.isFinishing() || activity.isDestroyed()) return;
                    if (info == null) {
                        if (manual) message("Установлена последняя тестовая версия");
                        return;
                    }
                    new AlertDialog.Builder(activity).setTitle("Обновление Puzzlegrad Test")
                        .setMessage(info.optString("version") + "\n\n" + info.optString("notes", "Тестовая сборка"))
                        .setNegativeButton("Позже", null)
                        .setPositiveButton("Обновить", (dialog, which) -> download(info.optString("url"))).show();
                });
            } catch (Exception e) {
                if (manual) message("Не удалось проверить тестовые обновления");
            } finally { checking.set(false); }
        }, "staging-update-check").start();
    }

    static void findUpdate(Context context, UpdateNotifier.Found callback) {
        callback.found(0, "", "");
    }

    private void message(String text) {
        activity.runOnUiThread(() -> {
            if (!activity.isFinishing() && !activity.isDestroyed())
                android.widget.Toast.makeText(activity, text, android.widget.Toast.LENGTH_LONG).show();
        });
    }

    void download(String url) {
        JSONObject info = offered;
        if (info == null || !url.equals(info.optString("url")) || !downloading.compareAndSet(false, true)) return;
        new Thread(() -> {
            File apk = null;
            try {
                apk = File.createTempFile("staging-", ".apk", activity.getCacheDir());
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                HttpURLConnection c = open(url);
                try (InputStream in = c.getInputStream(); OutputStream out = new FileOutputStream(apk)) {
                    long done = 0; int n; byte[] buf = new byte[65536];
                    while ((n = in.read(buf)) != -1) {
                        done += n;
                        if (done > MAX_APK) throw new IOException("APK too large");
                        out.write(buf, 0, n); digest.update(buf, 0, n);
                    }
                    if (done == 0) throw new IOException("Empty APK");
                } finally { c.disconnect(); }
                if (!hex(digest.digest()).equals(info.getString("sha256")))
                    throw new IOException("APK checksum mismatch");
                validate(apk, info.getInt("code"));
                final File ready = apk;
                activity.runOnUiThread(() -> {
                    if (activity.isFinishing() || activity.isDestroyed()) { ready.delete(); return; }
                    if (canInstall()) install(ready);
                    else {
                        pending = ready;
                        try { activity.startActivity(new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:" + PACKAGE))); }
                        catch (Exception e) { pending = null; ready.delete(); message("Разрешите установку обновлений в настройках Android"); }
                    }
                });
            } catch (Exception e) {
                if (apk != null) apk.delete();
                message("Тестовое обновление не прошло загрузку или проверку безопасности");
            } finally { downloading.set(false); }
        }, "staging-update-download").start();
    }

    private static String hex(byte[] bytes) {
        StringBuilder s = new StringBuilder();
        for (byte b : bytes) s.append(String.format(Locale.ROOT, "%02x", b & 255));
        return s.toString();
    }

    private Set<String> signers(PackageInfo info) throws Exception {
        Signature[] signatures;
        if (Build.VERSION.SDK_INT >= 28) {
            if (info.signingInfo == null) throw new IOException("No signing info");
            signatures = info.signingInfo.getApkContentsSigners();
        } else signatures = info.signatures;
        if (signatures == null || signatures.length == 0) throw new IOException("Unsigned package");
        Set<String> result = new HashSet<>();
        for (Signature s : signatures) result.add(hex(MessageDigest.getInstance("SHA-256").digest(s.toByteArray())));
        return result;
    }

    private void validate(File apk, int code) throws Exception {
        PackageManager pm = activity.getPackageManager();
        int flags = Build.VERSION.SDK_INT >= 28 ? PackageManager.GET_SIGNING_CERTIFICATES : PackageManager.GET_SIGNATURES;
        PackageInfo candidate = pm.getPackageArchiveInfo(apk.getAbsolutePath(), flags);
        PackageInfo current = pm.getPackageInfo(activity.getPackageName(), flags);
        if (candidate == null || !PACKAGE.equals(activity.getPackageName()) || !PACKAGE.equals(candidate.packageName))
            throw new IOException("Wrong package identity");
        long version = Build.VERSION.SDK_INT >= 28 ? candidate.getLongVersionCode() : candidate.versionCode;
        if (version != code || version <= BuildConfig.VERSION_CODE || !signers(candidate).equals(signers(current)))
            throw new IOException("Wrong version or signer");
    }

    private boolean canInstall() {
        return Build.VERSION.SDK_INT < 26 || activity.getPackageManager().canRequestPackageInstalls();
    }

    void onResume() {
        if (pending != null && canInstall()) {
            File apk = pending; pending = null; install(apk);
        }
    }

    private void install(File apk) {
        new Thread(() -> {
            android.content.pm.PackageInstaller pi = activity.getPackageManager().getPackageInstaller();
            int id = -1;
            try {
                android.content.pm.PackageInstaller.SessionParams params = new android.content.pm.PackageInstaller.SessionParams(
                        android.content.pm.PackageInstaller.SessionParams.MODE_FULL_INSTALL);
                params.setAppPackageName(PACKAGE); params.setSize(apk.length());
                id = pi.createSession(params);
                try (android.content.pm.PackageInstaller.Session session = pi.openSession(id)) {
                    try (InputStream in = new FileInputStream(apk); OutputStream out = session.openWrite("base.apk", 0, apk.length())) {
                        byte[] buf = new byte[65536]; int n;
                        while ((n = in.read(buf)) != -1) out.write(buf, 0, n);
                        session.fsync(out);
                    }
                    int flags = PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= 31 ? PendingIntent.FLAG_MUTABLE : 0);
                    Intent result = new Intent(activity, StagingInstallResult.class).setPackage(PACKAGE);
                    PendingIntent done = PendingIntent.getBroadcast(activity, id, result, flags);
                    session.commit(done.getIntentSender());
                }
            } catch (Exception e) {
                if (id >= 0) try { pi.abandonSession(id); } catch (Exception ignored) {}
                message("Не удалось установить тестовое обновление");
            } finally { apk.delete(); }
        }, "staging-update-install").start();
    }
}
