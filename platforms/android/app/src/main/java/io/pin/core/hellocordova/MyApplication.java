package io.pin.core.hellocordova;

import android.app.Application;
import com.moengage.cordova.MoEInitializer;
import com.moengage.core.MoEngage;
import com.moengage.cordova.MoEInitializer;
import com.moengage.core.MoEngage;
import com.moengage.core.config.FcmConfig;

public class MyApplication extends Application {

    public void onCreate() {
        super.onCreate();

        MoEngage.Builder moEngage = new MoEngage.Builder(this, "8SIW681S80Z08KSHQFSTIZ8T").configureFcm(new FcmConfig(false));
        MoEInitializer.initialiseDefaultInstance(this, moEngage);
    }
    
}
