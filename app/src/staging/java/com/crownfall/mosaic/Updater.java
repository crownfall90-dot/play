package com.crownfall.mosaic;

import android.content.Context;

/** Offline test builds must never install production updates. */
class Updater {
    Updater(MainActivity activity) {}
    void onResume() {}
    void check(boolean manual) {}
    void download(String url) {}
    static void findUpdate(Context context, UpdateNotifier.Found callback) {
        callback.found(0, "", "");
    }
}
