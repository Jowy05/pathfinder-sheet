// Electron main process for Pathfinder Sheet desktop app.
// Loads index.html in a chromeless BrowserWindow.

const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'Pathfinder CS by Jowy',
    icon: path.join(__dirname, 'icono.png'),
    backgroundColor: '#3b2a16',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      // Allow fetch() to load local .json files via file:// (Electron lets it through).
      webSecurity: true,
    },
  });

  mainWindow.loadFile('index.html');

  // Hide the default menu bar (File / Edit / View / ...). Keep keyboard shortcuts working.
  Menu.setApplicationMenu(null);

  // External links open in the default browser, not in a new Electron window.
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
