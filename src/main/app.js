import app from 'app';
import ipc from 'ipc';
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
            width: 800,
            height: 600,
            'title-bar-style': 'hidden',
            show: false,
            transparent: true
        });

        mainWindow.loadUrl(`file://${startDir}/public/index${HOT_RELOAD ? '.hot' : ''}.html`);

        if (DEV_TOOLS) {
            mainWindow.openDevTools();
        }

        mainWindow.on('closed', () => {
            mainWindow = null
        });

        ipc.on('ready', () => {
            mainWindow.show();
        });
    });
}
