package com.crownfall.mosaic;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;

public class MainActivity extends Activity {
    private WebView web;
    private Updater updater;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        updater = new Updater(this);
        UpdateNotifier.schedule(this);
        if (android.os.Build.VERSION.SDK_INT >= 33
                && checkSelfPermission(android.Manifest.permission.POST_NOTIFICATIONS) != android.content.pm.PackageManager.PERMISSION_GRANTED
                && !UpdateNotifier.prefs(this).getBoolean("askedNotify", false)) {
            UpdateNotifier.prefs(this).edit().putBoolean("askedNotify", true).apply();
            requestPermissions(new String[]{android.Manifest.permission.POST_NOTIFICATIONS}, 1);
        }

        // Android 15 draws apps edge to edge; keep the game clear of the status and navigation bars.
        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(0xFF101729);
        root.setOnApplyWindowInsetsListener((v, insets) -> {
            int types = WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout();
            android.graphics.Insets i = android.os.Build.VERSION.SDK_INT >= 30
                    ? insets.getInsets(types)
                    : android.graphics.Insets.of(insets.getSystemWindowInsetLeft(), insets.getSystemWindowInsetTop(),
                        insets.getSystemWindowInsetRight(), insets.getSystemWindowInsetBottom());
            v.setPadding(i.left, i.top, i.right, i.bottom);
            return insets;
        });

        web = new WebView(this);
        web.setBackgroundColor(0xFF101729);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        web.addJavascriptInterface(new Bridge(), "AndroidApp");
        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                updater.check(false);
            }
        });
        root.addView(web, new FrameLayout.LayoutParams(-1, -1));
        setContentView(root);
        web.loadUrl("file:///android_asset/index.html");
    }

    @Override
    protected void onResume() {
        super.onResume();
        updater.onResume();
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack(); else super.onBackPressed();
    }

    /** Runs JavaScript in the game page from any thread. */
    void js(String code) {
        runOnUiThread(() -> web.evaluateJavascript(code, null));
    }

    private class Bridge {
        @JavascriptInterface
        public String versionName() { return BuildConfig.VERSION_NAME; }

        @JavascriptInterface
        public void startUpdate(String url) { updater.download(url); }

        @JavascriptInterface
        public void checkUpdates() { updater.check(true); }

        @JavascriptInterface
        public void setUpdateNotifications(boolean on) { UpdateNotifier.setEnabled(MainActivity.this, on); }
    }
}
