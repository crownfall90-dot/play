package com.crownfall.mosaic;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.credentials.ClearCredentialStateRequest;
import androidx.credentials.CredentialManager;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.exceptions.GetCredentialException;
import com.google.android.libraries.identity.googleid.GetGoogleIdOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;
import com.google.android.libraries.identity.googleid.GoogleIdTokenParsingException;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

/**
 * Local account identity for the Android shell. The Google ID token is retained only as
 * signed-in state; server-side verification and profile synchronization are separate work.
 */
public final class AccountIdentity {
    private static final String PREFS = "account_identity";
    private static final Executor IO = Executors.newSingleThreadExecutor();

    private AccountIdentity() {}

    public interface Listener {
        void onSignedIn(@NonNull Profile profile);
        void onSignedOut();
        void onError(@NonNull String message);
    }

    public static final class Profile {
        public final String id;
        public final String name;
        public final String color;

        Profile(String id, String name, String color) {
            this.id = id == null ? "" : id;
            this.name = name == null ? "" : name;
            this.color = PlayerColor.normalize(color);
        }
    }

    @Nullable
    public static Profile current(Context context) {
        SharedPreferences p = prefs(context);
        if (!p.getBoolean("signedIn", false)) return null;
        return new Profile(p.getString("id", ""), p.getString("name", ""), p.getString("color", ""));
    }

    public static void signIn(Context context, String serverClientId, Listener listener) {
        if (serverClientId == null || serverClientId.isBlank()) {
            listener.onError("Google sign-in is not configured");
            return;
        }
        try {
            GetGoogleIdOption option = new GetGoogleIdOption.Builder()
                .setServerClientId(serverClientId)
                .setFilterByAuthorizedAccounts(false)
                .build();
            GetCredentialRequest request = new GetCredentialRequest.Builder().addCredentialOption(option).build();
            CredentialManager manager = CredentialManager.create(context);
            manager.getCredentialAsync(context, request, null, IO, result -> {
                try {
                    GoogleIdTokenCredential credential = GoogleIdTokenCredential.createFrom(result.getCredential().getData());
                    Profile profile = new Profile(credential.getId(), credential.getDisplayName(),
                        prefs(context).getString("color", PlayerColor.DEFAULT));
                    save(context, profile, true);
                    listener.onSignedIn(profile);
                } catch (GetCredentialException | GoogleIdTokenParsingException | IllegalArgumentException e) {
                    listener.onError(e.getClass().getSimpleName());
                }
            });
        } catch (RuntimeException e) {
            listener.onError(e.getClass().getSimpleName());
        }
    }

    public static void setColor(Context context, String color) {
        prefs(context).edit().putString("color", PlayerColor.normalize(color)).apply();
    }

    public static void signOut(Context context, Listener listener) {
        try {
            CredentialManager.create(context)
                .clearCredentialStateAsync(new ClearCredentialStateRequest(), null, IO,
                    result -> finishSignOut(context, listener), error -> finishSignOut(context, listener));
        } catch (RuntimeException e) {
            finishSignOut(context, listener);
        }
    }

    private static void finishSignOut(Context context, Listener listener) {
        prefs(context).edit().putBoolean("signedIn", false).remove("id").remove("name").apply();
        listener.onSignedOut();
    }

    private static void save(Context context, Profile profile, boolean signedIn) {
        prefs(context).edit()
            .putBoolean("signedIn", signedIn)
            .putString("id", profile.id)
            .putString("name", profile.name)
            .putString("color", profile.color)
            .apply();
    }

    private static SharedPreferences prefs(Context context) {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }
}
