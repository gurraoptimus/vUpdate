const uaup = require("uaup-js");

const defaultStages = {
  Checking: "Checking...",
  Found: "Update Found!",
  NotFound: "No Update Found.",
  Downloading: "Downloading...",
  Unzipping: "Installing...",
  Cleaning: "Finalizing...",
  Launch: "Launching..."
};

const updateOptions = {
  gitRepo: "vUpdate",              // Must match GitHub repo name exactly
  gitUsername: "gurraoptimus",     // Your GitHub username
  appName: "vupdate",              // Folder name inside the zip
  appExecutableName: "vupdate.exe",// Executable inside that folder

  // Only if running in Electron:
  // progressBar: document.getElementById("download"),
  // label: document.getElementById("download-label"),

  stageTitles: defaultStages,
};

uaup.Update(updateOptions);

(async () => {
  let isUpdateAvailable = await uaup.CheckForUpdates(updateOptions);
  if (isUpdateAvailable) {
    console.log("Update available!");
  } else {
    console.log("No update found.");
  }
})();
