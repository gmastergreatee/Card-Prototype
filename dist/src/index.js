"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var Path = __importStar(require("path"));
//@ts-ignore
var pack = __importStar(require("../package.json"));
var browserWindow;
//@ts-ignore
console.log(pack.env);
electron_1.app.on('ready', function (asd) {
    browserWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        title: 'SCS : Id Card Designer',
        show: false,
        webPreferences: {
            webSecurity: false,
            devTools: true,
            nodeIntegration: true,
            allowRunningInsecureContent: true
        },
        backgroundColor: 'white'
    });
    browserWindow.webContents.openDevTools();
    browserWindow.on('ready-to-show', function () {
        browserWindow.show();
    });
    browserWindow.setMenu(null);
    browserWindow.loadFile(Path.join(__dirname, 'index.html'));
});
