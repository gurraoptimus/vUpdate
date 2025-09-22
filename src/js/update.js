const { autoUpdater } = require("electron-updater");

autoUpdater.on("checking-for-update", () => {
  console.log("Checking for update...");
});

autoUpdater.on("update-available", (info) => {
  console.log("Update available:", info);
});

autoUpdater.on("update-not-available", (info) => {
  console.log("No update available.");
});

autoUpdater.on("error", (err) => {
  console.error("Error in auto-updater:", err);
});

autoUpdater.on("download-progress", (progressObj) => {
  console.log(`Download speed: ${progressObj.bytesPerSecond}`);
  console.log(`Downloaded ${progressObj.percent}%`);
});

autoUpdater.on("update-downloaded", (info) => {
  console.log("Update downloaded; will install now");
  autoUpdater.quitAndInstall();
});

app.on("ready", () => {
  autoUpdater.checkForUpdatesAndNotify();
});
