const { app, BrowserWindow } = require("electron");
const electronReload = require("electron-reload");

const path = require("path");
const url = require("url");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: __dirname + "/public/favicon.ico",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Clear refences when closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Load the app from localhost
  mainWindow.loadURL(
    url.format({
      pathname: "localhost:4200",
      protocol: "http:",
      slashes: true,
    })
  );
}

app.whenReady().then(createWindow);
