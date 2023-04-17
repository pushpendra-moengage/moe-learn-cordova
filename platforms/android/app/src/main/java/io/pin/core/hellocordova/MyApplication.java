package io.pin.core.hellocordova;

import android.app.Application;

// import javax.management.Notification;

import com.moengage.cordova.MoEInitializer;
import com.moengage.core.MoEngage;
import com.moengage.cordova.MoEInitializer;
import com.moengage.core.MoEngage;
import com.moengage.core.config.FcmConfig;
import com.moengage.core.config.LogConfig;
import com.moengage.core.config.NotificationConfig;


public class MyApplication extends Application {

    public void onCreate() {
        super.onCreate();

        MoEngage.Builder moEngage = new MoEngage.Builder(this, "8SIW681S80Z08KSHQFSTIZ8T")
                                            .configureFcm(new FcmConfig(true))
                                            .configureLogs(new LogConfig(5, true))
                                            .configureNotificationMetaData(new NotificationConfig(R.mipmap.ic_launcher, R.mipmap.ic_launcher, -1, true, false, true));
        MoEInitializer.initialiseDefaultInstance(this, moEngage);
    }
    
}
