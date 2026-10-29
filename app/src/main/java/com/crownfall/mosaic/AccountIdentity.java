package com.crownfall.mosaic;

import android.content.Context;
import android.content.SharedPreferences;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.credentials.ClearCredentialStateRequest;
import androidx.credentials.CredentialManager;
import androidx.credentials.CredentialManagerCallback;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.GetCredentialResponse;
import androidx.credentials.exceptions.ClearCredentialException;
import androidx.credentials.exceptions.GetCredentialException;
import com.google.android.libraries.identity.googleid.GetGoogleIdOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

/** Experimental local cache, not a verified Firebase session. Not wired to the game UI.
 * The production game continues using MainActivity's token bridge and Firebase auth. */
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
        public final String id, name, color;
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
        if (serverClientId == null || serverClientId.trim().isEmpty()) {
            listener.onError("Google sign-in is not configured");
            return;
        }
        try {
            GetGoogleIdOption option = new GetGoogleIdOption.Builder()
                .setServerClientId(serverClientId).setFilterByAuthorizedAccounts(false).build();
            GetCredentialRequest request = new GetCredentialRequest.Builder().addCredentialOption(option).build();
            CredentialManager.create(context).getCredentialAsync(context, request, null, IO,
                new CredentialManagerCallback<GetCredentialResponse, GetCredentialException>() {
                    @Override public void onResult(@NonNull GetCredentialResponse result) {
                        try {
                            GoogleIdTokenCredential credential = GoogleIdTokenCredential.createFrom(result.getCredential().getData());
                            Profile profile = new Profile(credential.getId(), credential.getDisplayName(),
                                prefs(context).getString("color", PlayerColor.DEFAULT));
                            save(context, profile);
                            listener.onSignedIn(profile);
                        } catch (Exception e) { listener.onError(e.getClass().getSimpleName()); }
                    }
                    @Override public void onError(@NonNull GetCredentialException error) {
                        listener.onError(error.getClass().getSimpleName());
                    }
                });
        } catch (RuntimeException e) { listener.onError(e.getClass().getSimpleName()); }
    }

    public static void setColor(Context context, String color) {
        prefs(context).edit().putString("color", PlayerColor.normalize(color)).apply();
    }

    public static void signOut(Context context, Listener listener) {
        try {
            CredentialManager.create(context).clearCredentialStateAsync(new ClearCredentialStateRequest(), null, IO,
                new CredentialManagerCallback<Void, ClearCredentialException>() {
                    @Override public void onResult(@Nullable Void result) { finishSignOut(context, listener); }
                    @Override public void onError(@NonNull ClearCredentialException error) { finishSignOut(context, listener); }
                });
        } catch (RuntimeException e) { finishSignOut(context, listener); }
    }

    private static void finishSignOut(Context context, Listener listener) {
        prefs(context).edit().putBoolean("signedIn", false).remove("id").remove("name").apply();
        listener.onSignedOut();
    }

    private static void save(Context context, Profile profile) {
        prefs(context).edit().putBoolean("signedIn", true).putString("id", profile.id)
            .putString("name", profile.name).putString("color", profile.color).apply();
    }

    private static SharedPreferences prefs(Context context) {
        return context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
    }
}
