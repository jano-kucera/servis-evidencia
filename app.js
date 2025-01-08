const { app, BrowserWindow } = require("electron");

const url = require("url");

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        icon: __dirname + "/public/favicon.ico",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.openDevTools();

    // Load the app from localhost
    mainWindow.loadURL(
        url.format({
            pathname: "localhost:4200",
            protocol: "http:",
            slashes: true,
        }),
    );
});
