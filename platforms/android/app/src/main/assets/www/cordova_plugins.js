cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-moengage-core.MoECordova",
      "file": "plugins/cordova-moengage-core/www/MoECordova.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoECordova"
      ]
    },
    {
      "id": "cordova-moengage-core.MoEConstants",
      "file": "plugins/cordova-moengage-core/www/MoEConstants.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoEConstants"
      ]
    },
    {
      "id": "cordova-moengage-core.MoEJsonProvider",
      "file": "plugins/cordova-moengage-core/www/MoEJsonProvider.js",
      "pluginId": "cordova-moengage-core",
      "clobbers": [
        "MoEJsonProvider"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-moengage-core": "8.3.0"
  };
});