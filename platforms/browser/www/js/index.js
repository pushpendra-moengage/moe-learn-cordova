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
document.addEventListener('deviceready', onDeviceReady, false);

document.addEventListener('volumeupbutton', onVolumeUp, false);

document.addEventListener('pause', onPaused, false);

document.addEventListener('resume', onResume, false);

document.addEventListener('backbutton', onBackPressed, false)

document.addEventListener('volumedownbutton', onVolumeDown, false)

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
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
            document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
            document.getElementById("removeProjectFromLocalStorage").addEventListener("click", removeProjectFromLocalStorage);
            document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);

            var localStorage = window.localStorage

            function setLocalStorage(){
                localStorage.setItem("Name", "AP")
                localStorage.setItem("Job", "SE")
                localStorage.setItem("Project", "Cordova")
            }

            function showLocalStorage() {
                console.log(localStorage.getItem("Name"))
                console.log(localStorage.getItem("Job"))
                console.log(localStorage.getItem("Project"))
            }

            function removeProjectFromLocalStorage() {
                localStorage.removeItem("Project")
            }

            function getLocalStorageByKey() {
                console.log(localStorage.key(0))
            }
}
