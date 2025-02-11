import { app, BrowserWindow, ipcMain } from "electron";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import type { LoadFilesEventData } from "./app-events";
import { AppEvent } from "./app-events";

void app.whenReady().then(async () => {
    const mainWindow = new BrowserWindow({
        height: 1080,
        icon: __dirname + "/public/favicon.ico",
        thickFrame: true,
        webPreferences: {
            contextIsolation: false,
            devTools: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "app-preload.js"),
        },
        width: 1920,
    });

    mainWindow.webContents.openDevTools();

    // Load the app from localhost
    await mainWindow.loadURL(
        url.format({
            pathname: "localhost:4200",
            protocol: "http:",
            slashes: true,
        }),
    );
});

ipcMain.handle(
    AppEvent.LoadFiles,
    (event: Electron.IpcMainInvokeEvent, data: LoadFilesEventData) => {
        const result: string[] = [];
        const files = fs.readdirSync(data.dirPath, {
            encoding: "utf-8",
            recursive: true,
        });

        // Find all JSON files in the given directory
        files.forEach((file: string) => {
            if (path.extname(file) === data.extension) {
                try {
                    // Read and parse the JSON file
                    result.push(
                        fs.readFileSync(path.join(data.dirPath, file), "utf-8"),
                    );
                } catch (error) {
                    console.error(`Error reading file ${file}:`, error);
                }
            }
        });

        return result;
    },
);
