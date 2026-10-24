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

        // Full screen: the game draws under the status bar and camera cutout, system bars are hidden
        // (a swipe from the edge shows them for a moment). The page gets the cutout sizes as CSS
        // variables, so buttons stay clear of a camera hole in a corner.
        root = new FrameLayout(this);
        root.setBackgroundColor(0xFF101729);
        if (Build.VERSION.SDK_INT >= 28) {
            android.view.WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.layoutInDisplayCutoutMode = android.view.WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(lp);
        }
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            sendInsets(insets);
            return insets;
        });
        setContentView(root);
        hideSystemBars();
        createWebView();
    }

    private String insetsJs = "";

    /** Camera cutout sizes in CSS pixels → --it/--ib/--il/--ir; --itg is the top gap for the game screen. */
    private void sendInsets(WindowInsets insets) {
        float d = getResources().getDisplayMetrics().density;
        int top = 0, bottom = 0, left = 0, right = 0;
        boolean cornerCut = false;
        if (Build.VERSION.SDK_INT >= 28 && insets.getDisplayCutout() != null) {
            android.view.DisplayCutout c = insets.getDisplayCutout();
            top = c.getSafeInsetTop(); bottom = c.getSafeInsetBottom(); left = c.getSafeInsetLeft(); right = c.getSafeInsetRight();
            int w = root.getWidth() > 0 ? root.getWidth() : getResources().getDisplayMetrics().widthPixels;
            for (android.graphics.Rect r : c.getBoundingRects()) {
                if (r.top < w && (r.left < w * 0.3 || r.right > w * 0.7)) cornerCut = true;
            }
        }
        // The navigation (gesture) bar stays on screen, see on top of the page: keep content clear of it.
        bottom = Math.max(bottom, navBottom(insets));
        // A hole in the middle of the top edge sits between our corner buttons, so the game screen
        // can start at the very top; a cutout in a corner pushes it down.
        insetsJs = String.format(java.util.Locale.US,
                "(function(s){s.setProperty('--it','%.1fpx');s.setProperty('--ib','%.1fpx');s.setProperty('--il','%.1fpx');s.setProperty('--ir','%.1fpx');s.setProperty('--itg','%.1fpx');})(document.documentElement.style)",
                top / d, bottom / d, left / d, right / d, (cornerCut ? top : 0) / d);
        if (pageReady) js(insetsJs);
    }

    @SuppressWarnings("deprecation")
    private int navBottom(WindowInsets insets) {
        if (Build.VERSION.SDK_INT >= 30) return insets.getInsets(WindowInsets.Type.navigationBars()).bottom;
        return insets.getSystemWindowInsetBottom();
    }

    /* Only the status bar is hidden. The navigation / gesture bar stays (transparent, drawn over the
       page), so a single edge swipe is the system "back" gesture: with the bar hidden too, Android
       needs a first swipe just to bring it back ("swipe again"). */
    @SuppressWarnings("deprecation")
    private void hideSystemBars() {
        getWindow().setNavigationBarColor(android.graphics.Color.TRANSPARENT);
        if (Build.VERSION.SDK_INT >= 29) getWindow().setNavigationBarContrastEnforced(false);
        if (Build.VERSION.SDK_INT >= 30) {
            android.view.WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                getWindow().setDecorFitsSystemWindows(false);
                c.hide(WindowInsets.Type.statusBars());
                c.show(WindowInsets.Type.navigationBars());
                c.setSystemBarsBehavior(android.view.WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        }
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemBars();
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
                if (!insetsJs.isEmpty()) view.evaluateJavascript(insetsJs, null);
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

        /** Whether Android lets the game show notifications (the system switch, not the in-game one). */
        @JavascriptInterface
        public boolean notificationsAllowed() {
            try {
                android.app.NotificationManager nm = (android.app.NotificationManager) getSystemService(NOTIFICATION_SERVICE);
                if (Build.VERSION.SDK_INT >= 24 && !nm.areNotificationsEnabled()) return false;
                return Build.VERSION.SDK_INT < 33 || checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) == android.content.pm.PackageManager.PERMISSION_GRANTED;
            } catch (Exception e) {
                report(e);
                return true;
            }
        }

        /** Asks Android to allow notifications: the system question if it may still be asked, else the app's notification settings. */
        @JavascriptInterface
        public void askNotifications() {
            runOnUiThread(() -> {
                try {
                    if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) != android.content.pm.PackageManager.PERMISSION_GRANTED
                            && shouldShowRequestPermissionRationale(android.Manifest.permission.POST_NOTIFICATIONS)) {
                        requestPermissions(new String[]{android.Manifest.permission.POST_NOTIFICATIONS}, 1);
                        return;
                    }
                    Intent i = Build.VERSION.SDK_INT >= 26
                            ? new Intent(android.provider.Settings.ACTION_APP_NOTIFICATION_SETTINGS).putExtra(android.provider.Settings.EXTRA_APP_PACKAGE, getPackageName())
                            : new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.parse("package:" + getPackageName()));
                    startActivity(i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));
                } catch (Exception e) {
                    report(e);
                }
            });
        }

        /** Owner panel: this phone also gets test announcements. */
        @JavascriptInterface
        public void newsTest(boolean on) {
            try {
                PushService.testTopic(MainActivity.this, on);
            } catch (Exception e) {
                report(e);
            }
        }
    }
}
