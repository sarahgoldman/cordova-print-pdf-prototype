cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-print-pdf/www/PrintPDF.js",
        "id": "cordova-plugin-print-pdf.PrintPDF",
        "clobbers": [
            "window.PrintPDF"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.2-dev",
    "cordova-plugin-device": "1.0.2-dev",
    "cordova-plugin-inappbrowser": "1.0.2-dev",
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-print-pdf": "2.0.0"
}
// BOTTOM OF METADATA
});