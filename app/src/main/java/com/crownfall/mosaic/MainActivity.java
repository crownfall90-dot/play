package com.crownfall.mosaic;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.Gravity;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.google.firebase.FirebaseApp;
import com.google.firebase.crashlytics.FirebaseCrashlytics;

public class MainActivity extends Activity {
    private static final long RECHECK_MS = 15 * 60 * 1000L;
    /** The open game, if it is on screen; lets an update push show the in-game offer instead of a notification. */
    private static java.lang.ref.WeakReference<MainActivity> visible = new java.lang.ref.WeakReference<>(null);
    private final Handler handler = new Handler(Looper.getMainLooper());
    private final Runnable recheck = () -> checkSoon();
    private FrameLayout root;
    private WebView web;
    private Updater updater;
    private boolean pageReady;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        updater = new Updater(this);
        // Background helpers must never stop the game from opening.
        try {
            UpdateNotifier.schedule(this);
            PushService.subscribe(this, UpdateNotifier.prefs(this).getBoolean("notify", true));
        } catch (Exception e) {
            report(e);
        }
        if (Build.VERSION.SDK_INT >= 33
                && checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) != android.content.pm.PackageManager.PERMISSION_GRANTED
                && !UpdateNotifier.prefs(this).getBoolean("askedNotify", false)) {
            UpdateNotifier.prefs(this).edit().putBoolean("askedNotify", true).apply();
            requestPermissions(new String[]{android.Manifest.permission.POST_NOTIFICATIONS}, 1);
        }

        // Android 15 draws apps edge to edge; keep the game clear of the status and navigation bars.
        root = new FrameLayout(this);
        root.setBackgroundColor(0xFF101729);
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            if (Build.VERSION.SDK_INT >= 30) {
                android.graphics.Insets i = insets.getInsets(WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout());
                v.setPadding(i.left, i.top, i.right, i.bottom);
            } else {
                v.setPadding(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(),
                        insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            }
            return insets;
        });
        setContentView(root);
        createWebView();
    }

    private void createWebView() {
        pageReady = false;
        try {
            web = new WebView(this);
        } catch (Exception e) {
            // No working Android System WebView on this phone (it is being updated or was disabled).
            report(e);
            TextView t = new TextView(this);
            t.setText("Не удалось запустить игру.\n\nОбновите или включите «Android System WebView» в Google Play и откройте игру снова.");
            t.setTextColor(0xFFEEF1F8);
            t.setTextSize(18);
            t.setGravity(Gravity.CENTER);
            t.setPadding(48, 48, 48, 48);
            root.addView(t, new FrameLayout.LayoutParams(-1, -1));
            return;
        }
        web.setBackgroundColor(0xFF101729);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setTextZoom(100); // large system fonts must not break the game layout
        web.addJavascriptInterface(new Bridge(), "AndroidApp");
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                pageReady = true;
                checkSoon();
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri u = request.getUrl();
                if ("file".equals(u.getScheme())) return false;
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception e) {
                    report(e);
                }
                return true;
            }

            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                // The browser engine crashed or was killed for memory: start a fresh one instead of
                // letting Android close the app. An offline game resumes from its save.
                report(new IllegalStateException("WebView renderer gone"));
                root.removeView(view);
                view.destroy();
                if (web == view) createWebView();
                return true;
            }
        });
        root.addView(web, new FrameLayout.LayoutParams(-1, -1));
        web.loadUrl("file:///android_asset/index.html");
    }

    @Override
    protected void onResume() {
        super.onResume();
        visible = new java.lang.ref.WeakReference<>(this);
        updater.onResume();
        if (web != null) web.onResume();
        // Coming back to the game counts as entering it: look for a new version again.
        if (pageReady) checkSoon();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (visible.get() == this) visible.clear();
        handler.removeCallbacks(recheck);
        if (web != null) web.onPause();
    }

    @Override
    protected void onDestroy() {
        handler.removeCallbacks(recheck);
        if (web != null) web.destroy();
        super.onDestroy();
    }

    static MainActivity visible() {
        return visible.get();
    }

    /** Checks for an update now and again every 15 minutes while the game stays on screen. */
    void checkSoon() {
        handler.removeCallbacks(recheck);
        try {
            updater.check(false);
        } catch (Exception e) {
            report(e);
        }
        handler.postDelayed(recheck, RECHECK_MS);
    }

    @Override
    public void onBackPressed() {
        if (web == null || !pageReady) { super.onBackPressed(); return; }
        // The game decides: close a dialog, open the game menu, go back a screen, or let the app close.
        web.evaluateJavascript("window.onBack ? window.onBack() : false", handled -> {
            if (!"true".equals(handled)) finish();
        });
    }

    /** Runs JavaScript in the game page from any thread. */
    void js(String code) {
        runOnUiThread(() -> {
            if (web != null) web.evaluateJavascript(code, null);
        });
    }

    /** Sends a problem to Firebase Crashlytics (if this build has Firebase) without crashing. */
    void report(Throwable e) {
        try {
            if (!FirebaseApp.getApps(this).isEmpty()) FirebaseCrashlytics.getInstance().recordException(e);
        } catch (Throwable ignored) {
        }
    }

    private class Bridge {
        @JavascriptInterface
        public String versionName() { return BuildConfig.VERSION_NAME; }

        @JavascriptInterface
        public void startUpdate(String url) { updater.download(url); }

        @JavascriptInterface
        public void checkUpdates() { updater.check(true); }

        @JavascriptInterface
        public void setUpdateNotifications(boolean on) {
            try {
                UpdateNotifier.setEnabled(MainActivity.this, on);
            } catch (Exception e) {
                report(e);
            }
        }

        @JavascriptInterface
        public void logError(String message) { report(new RuntimeException("JS: " + message)); }
    }
}
