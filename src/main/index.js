import { app, BrowserWindow } from 'electron' // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}
let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080/main'
  : `file://${__dirname}/main/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    webPreferences: {
      webSecurity: false,
      devTools: true
    },
    show: false,
    title: 'vue-electron多界面',
    autoHideMenuBar: true
    // alwaysOnTop: true,
    // backgroundColor: '#2e2c29'
  });
  mainWindow.loadURL(winURL);
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize(); // 最大化
    // mainWindow.show()
  });
  mainWindow.on('closed', () => {
    mainWindow = null;
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  // 引入newPage.js，负责悬浮窗口内主进程和渲染进程之间的通信
  require('./newPage');
  global.mainWindow = {
    id: mainWindow.id
  };
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
