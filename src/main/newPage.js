
import { BrowserWindow, ipcMain, screen } from 'electron';

let win = null;
const winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080/newPage' : `file://${__dirname}/newPage/index.html`;

/**
 * 创建新窗口函数
 */
function createNewPageWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 180,
    minWidth: 500,
    minHeight: 130,
    type: 'toolbar', // 创建的窗口类型为工具栏窗口
    frame: false, // 要创建无边框窗口
    movable: true, // 窗口是否可以移动
    show: false, // 先不让窗口显示
    webPreferences: {
      devTools: true, // 关闭调试工具
      webSecurity: true,
    },
    useContentSize: true,
  });
  const size = screen.getPrimaryDisplay().workAreaSize; // 获取显示器的宽高
  const winSize = win.getSize(); // 获取窗口宽高
  // 设置窗口的位置 注意x轴要桌面的宽度 - 窗口的宽度
  win.loadURL(winURL);
  win.setPosition((size.width - winSize[0]) / 2, 350);
  // 监听渲染完成
  win.once('ready-to-show', () => {
    win.show();
  });
  // 监听窗口关闭
  win.on('close', () => {
    win = null;
  });

  global.newPage = {
    id: win.id
  };
}

/**
 * 监听创建新窗口
 */
ipcMain.on('showNewPageWindow', () => {
  if (win) {
    if (win.isVisible()) {
      createNewPageWindow();
    } else {
      win.showInactive();
    }
  } else {
    createNewPageWindow();
  }
});

/**
 * 监听隐藏新窗口
 */
ipcMain.on('hideNewPageWindow', () => {
  if (win) {
    win.hide();
  }
});
