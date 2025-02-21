import { app, BrowserWindow, ipcMain } from "electron";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import type { LoadFilesEventData } from "./src/electron/app-events";
import { AppEvent } from "./src/electron/app-events";

void app.whenReady().then(async () => {
    const mainWindow = new BrowserWindow({
        height: 1080,
        icon: __dirname + "/public/favicon.ico",
        thickFrame: true,
        webPreferences: {
            contextIsolation: false,
            devTools: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "src", "electron", "app-preload.js"),
        },
        width: 1920,
    });

    mainWindow.menuBarVisible = false;

    if (app.isPackaged) {
        // Load the app from the dist folder
        await mainWindow.loadURL(
            url.format({
                pathname: path.join(
                    __dirname,
                    "dist",
                    "servis-evidencia",
                    "browser",
                    "index.html",
                ),
                protocol: "file:",
                slashes: true,
            }),
        );
    } else {
        // Load the app from localhost
        await mainWindow.loadURL(
            url.format({
                pathname: "localhost:4200",
                protocol: "http:",
                slashes: true,
            }),
        );
        mainWindow.webContents.openDevTools();
    }
});

ipcMain.handle(
    AppEvent.LoadFiles,
    (event: Electron.IpcMainInvokeEvent, data: LoadFilesEventData) => {
        const files = fs.readdirSync(data.dirPath, {
            encoding: "utf-8",
            recursive: true,
        });

        // Find all JSON files in the given directory
        const result: Record<string, string> = {};
        files.forEach((file: string) => {
            if (path.extname(file) === data.extension) {
                try {
                    const filePath = path.join(data.dirPath, file);

                    // Read and parse the JSON file
                    result[filePath] = fs.readFileSync(filePath, "utf-8");
                } catch (error) {
                    console.error(`Error reading file ${file}:`, error);
                }
            }
        });

        return result;
    },
);
