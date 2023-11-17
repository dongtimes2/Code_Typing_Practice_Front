/*eslint-disable */
const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1440,
    minHeight: 900,
    maxWidth: 1440,
    maxHeight: 900,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: join(__dirname, 'preload.js'),
    },
  });

  const url = join(__dirname, '../build/index.html');
  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(url);
  }
}

ipcMain.on('naverLogin', (event, data) => {
  const CLIENT_ID = data.clientId;
  const CALLBACK_URL = data.callbackUrl;
  const STATE = data.state;
  const LOAD_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&state=${STATE}`;

  let loginWindow = new BrowserWindow({
    width: 380,
    height: 900,
    show: false,
    parent: mainWindow,
  });

  loginWindow.loadURL(LOAD_URL, { userAgent: 'Chrome' });

  loginWindow.on('ready-to-show', () => {
    loginWindow.show();
  });

  let naverToken = '';

  loginWindow.webContents.on('will-navigate', (event, newUrl) => {
    const url = new URL(newUrl);
    const params = new URLSearchParams(url.search);
    naverToken = params.get('oauth_token');
  });

  loginWindow.webContents.on('did-finish-load', () => {
    if (naverToken) {
      event.sender.send('naverToken', naverToken);
      loginWindow.close();
    }
  });
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
