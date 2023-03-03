cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-moengage-core/www/MoECordova.js",
        "id": "cordova-moengage-core.MoECordova",
        "pluginId": "cordova-moengage-core",
        "clobbers": [
            "MoECordova"
        ]
    },
    {
        "file": "plugins/cordova-moengage-core/www/MoEConstants.js",
        "id": "cordova-moengage-core.MoEConstants",
        "pluginId": "cordova-moengage-core",
        "clobbers": [
            "MoEConstants"
        ]
    },
    {
        "file": "plugins/cordova-moengage-core/www/MoEJsonProvider.js",
        "id": "cordova-moengage-core.MoEJsonProvider",
        "pluginId": "cordova-moengage-core",
        "clobbers": [
            "MoEJsonProvider"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-moengage-core": "8.3.0"
}
// BOTTOM OF METADATA
});