import app from 'app';
import { ipcMain } from 'electron';
import BrowserWindow from 'browser-window';

const HOT_RELOAD = process.env.HOT_RELOAD || false;
const DEV_TOOLS = process.env.DEV_TOOLS || false;

export default function init (startDir) {
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    let mainWindow;

    app.on('ready', () => {
        mainWindow = new BrowserWindow({
            title: 'Soundplayer',
            'min-width': 800,
            'min-height': 600,
            width: 1000,
            height: 750,
            'title-bar-style': 'hidden',
            show: false
        });

        console.log(HOT_RELOAD, startDir)
        mainWindow.loadURL(`file://${startDir}/public/index${HOT_RELOAD ? '.hot' : ''}.html`);

        if (DEV_TOOLS) {
            mainWindow.openDevTools();
        }

        mainWindow.on('closed', () => {
            mainWindow = null
        });

        ipcMain.on('ready', () => {
            mainWindow.show();
        });
    });
}
