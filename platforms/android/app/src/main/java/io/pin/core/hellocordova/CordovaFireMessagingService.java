package io.pin.core.hellocordova;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.moengage.firebase.MoEFireBaseHelper;

public class CordovaFireMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(@NonNull RemoteMessage message) {
        super.onMessageReceived(message);
        MoEFireBaseHelper.getInstance().passPushPayload(getApplicationContext(), message.getData());
    }

    @Override
    public void onNewToken(@NonNull String token) {
        super.onNewToken(token);
        MoEFireBaseHelper.getInstance().passPushToken(getApplicationContext(), token);
    }
}
