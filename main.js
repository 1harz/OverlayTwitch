const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let controlWindow;
let overlayWindow;

function createControlWindow() {
    controlWindow = new BrowserWindow({
        width: 450,
        height: 550,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        title: 'Chat Overlay Controles',
        autoHideMenuBar: true
    });

    controlWindow.loadFile(path.join(__dirname, 'control.html'));

    controlWindow.on('closed', () => {
        app.quit();
    });
}

function createOverlayWindow(config) {
    if (overlayWindow) {
        overlayWindow.close();
    }

    const { screen } = require('electron');
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

    let overlayWidth = parseInt(config.width) || 350;
    let overlayHeight = parseInt(config.height) || 600;

    let x = 0;
    let y = 0;

    // Calculando posições de tela
    if (config.position === 'top-left') {
        x = 0;
        y = 0;
    } else if (config.position === 'top-right') {
        x = screenWidth - overlayWidth;
        y = 0;
    } else if (config.position === 'bottom-left') {
        x = 0;
        y = screenHeight - overlayHeight;
    } else if (config.position === 'bottom-right') {
        x = screenWidth - overlayWidth;
        y = screenHeight - overlayHeight;
    }

    overlayWindow = new BrowserWindow({
        width: overlayWidth,
        height: overlayHeight,
        x: x,
        y: y,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Torna a janela "atravessável" pelo mouse.
    overlayWindow.setIgnoreMouseEvents(true, { forward: true });
    overlayWindow.setAlwaysOnTop(true, 'screen-saver');

    overlayWindow.loadFile(path.join(__dirname, 'overlay.html'));

    overlayWindow.webContents.on('did-finish-load', () => {
        overlayWindow.webContents.send('init-overlay', config);
    });
}

app.whenReady().then(createControlWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('start-overlay', (event, config) => {
    createOverlayWindow(config);
});

ipcMain.on('stop-overlay', () => {
    if (overlayWindow) {
        overlayWindow.close();
        overlayWindow = null;
    }
});
