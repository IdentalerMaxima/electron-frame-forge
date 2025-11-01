const { app, BrowserWindow } = require('electron');
const path = require('path');

if (!require('electron').app.isPackaged) {
  require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'), 
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

