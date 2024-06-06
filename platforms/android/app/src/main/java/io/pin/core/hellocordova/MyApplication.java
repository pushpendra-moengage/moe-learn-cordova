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
import com.moengage.core.*;
import com.moengage.core.DataCenter;



public class MyApplication extends Application {

    public void onCreate() {
        super.onCreate();

        MoEngage.Builder moEngage = new MoEngage.Builder(this, "YRRM72T6B2LAXARZC8TH9TGP", DataCenter.DATA_CENTER_1)
                                            .configureFcm(new FcmConfig(false))
                                            .configureLogs(new LogConfig(5, true))
                                            .setDataCenter(DataCenter.DATA_CENTER_3)
                                            .configureNotificationMetaData(new NotificationConfig(R.mipmap.ic_launcher, R.mipmap.ic_launcher, -1, true, false, true));
        MoEInitializer.initialiseDefaultInstance(this, moEngage);
    }
    
}
