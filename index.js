const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 200,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: 'src/icons/icon.ico', // Set your custom icon path here
    frame: false, // Remove window frame for a cleaner look
    maximizable: true, // Disable window maximization
    minimizable: false, // Disable window minimization
    title: 'vUpdate', // Set custom window title
});
win.setTitle('vUpdate');
win.loadFile('src/html/index.html');
win.setMenu(null); // Remove default menu
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});