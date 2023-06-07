// import MoECordova;

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var moe
    
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    // moe = MoECordova.init("8SIW681S80Z08KSHQFSTIZ8T");

    var moe = MoECordova.init("YRRM72T6B2LAXARZC8TH9TGP");
    moe.trackEvent("Advance Payments", { "screen name": "ADVANCE PAYMENT","loan-amount":"200","LAN":"100001" }, true);

    moe.setCurrentContext(["Champ-core"]);

    moe.getSelfHandledInApp();

    moe.on('onInAppSelfHandle', function(selfHandledPayload) {
        console.log('Self hanlded InApp Info: ' + JSON.stringify(selfHandledPayload));
     });

    moe.on('onInAppShown', function(inAppInfo) {
        console.log('InApp Shown with Info: ' + JSON.stringify(inAppInfo));
  });
  
  moe.on('onInAppClick', function(inAppInfo) {
      console.log('InApp Shown Clicked with Info: ' + JSON.stringify(inAppInfo));
  });
  
  moe.on('onInAppDismiss', function(inAppInfo) {
      console.log('InApp Dismissed with Info: ' + JSON.stringify(inAppInfo));
  });
  
  moe.on('onInAppCustomAction', function(inAppInfo) {
      console.log('InApp Custom Action with Info: ' + JSON.stringify(inAppInfo));
  });

  moe.showInApp();


  moe.onOrientationChanged();
  
    let version = 2;

    if(version == 1){
        moe.setAppStatus("INSTALL");
    } else {
        moe.setAppStatus("UPDATE");
    }

    

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Login
    login();
    


    // Push click callback

    moe.on("onPushClick", (payloadInfo) => {
        console.log("----- Push click callback cordova begins --------")
        console.log(payloadInfo?.data);
        console.log("----- Push click callback cordova ends --------")
        
    })

}

function login() {
    moe.setUniqueId("cordova@app_32");
    alert('Tried logging in')
    console.log("Loggin with with ")
}


// ------------------------------------- Non essential code below ------------------------------//

// document.addEventListener('volumeupbutton', onVolumeUp, false);
// 
// document.addEventListener('pause', onPaused, false);

// document.addEventListener('resume', onResume, false);

// document.addEventListener('backbutton', onBackPressed, false)

// document.addEventListener('volumedownbutton', onVolumeDown, false)

document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
document.getElementById("removeProjectFromLocalStorage").addEventListener 
   ("click", removeProjectFromLocalStorage); 
document.getElementById("getLocalStorageByKey").addEventListener 
   ("click", getLocalStorageByKey);  
var localStorage = window.localStorage;

function setLocalStorage() { 
    localStorage.setItem("Name", "John"); 
    localStorage.setItem("Job", "Developer"); 
    localStorage.setItem("Project", "Cordova Project"); 
 } 

 function showLocalStorage() { 
    console.log(localStorage.getItem("Name")); 
    console.log(localStorage.getItem("Job")); 
    console.log(localStorage.getItem("Project")); 
 } 

 function removeProjectFromLocalStorage() {
    localStorage.removeItem("Project");
 }

 function getLocalStorageByKey() {
    console.log(localStorage.key(0));
 }

function onVolumeDown() {
    alert("Volume up pressed")
}

function onBackPressed(e) {
    e.preventDefault();
    alert("Back pressed")
}

function onPaused(){
    alert("Pausing App")
}

function onResume() {
    alert("Resuming App")
}

function onVolumeUp() {
    alert('Volume up is pressed')
    console.log("Volume Up")
}
