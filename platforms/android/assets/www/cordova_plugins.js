cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.sgoldm.plugins.printpdf/www/PrintPDF.js",
        "id": "com.sgoldm.plugins.printpdf.PrintPDF",
        "clobbers": [
            "window.PrintPDF"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.sgoldm.plugins.printpdf": "0.1.0",
    "cordova-plugin-device": "1.0.2-dev",
    "cordova-plugin-inappbrowser": "1.0.2-dev"
}
// BOTTOM OF METADATA
});