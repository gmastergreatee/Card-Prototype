import { app, BrowserWindow } from 'electron';
import * as Path from 'path';

let browserWindow: BrowserWindow;

app.on('ready', asd => {
    browserWindow = new BrowserWindow({
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
    browserWindow.on('ready-to-show', () => {
        browserWindow.show();
    });
    browserWindow.loadFile(Path.join(__dirname, 'index.html'));
});
