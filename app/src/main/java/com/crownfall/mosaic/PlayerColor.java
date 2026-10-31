package com.crownfall.mosaic;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

/** Fixed palette for player identity; arbitrary colors are rejected. */
public final class PlayerColor {
    public static final String DEFAULT = "blue";
    private static final String[] ALLOWED = {"blue", "red", "green", "yellow", "purple", "orange"};

    private PlayerColor() {}

    @NonNull
    public static String normalize(@Nullable String value) {
        if (value == null) return DEFAULT;
        String v = value.trim().toLowerCase();
        for (String allowed : ALLOWED) if (allowed.equals(v)) return v;
        return DEFAULT;
    }

    public static boolean isAllowed(@Nullable String value) {
        String v = normalize(value);
        return !DEFAULT.equals(v) || (value != null && DEFAULT.equals(value.trim().toLowerCase()));
    }
}
