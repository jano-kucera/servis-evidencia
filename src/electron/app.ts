import { app, BrowserWindow, ipcMain } from "electron";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
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
    AppEvent.LoadJsonFiles,
    (event: Electron.IpcMainInvokeEvent, dirPath: string) => {
        const result: string[] = [];
        const files = fs.readdirSync(dirPath, {
            encoding: "utf-8",
            recursive: true,
        });

        // Find all JSON files in the given directory
        files.forEach((file: string) => {
            if (path.extname(file) === ".json") {
                try {
                    // Read and parse the JSON file
                    const fileContent = fs.readFileSync(
                        path.join(dirPath, file),
                        "utf-8",
                    );

                    // Add the parsed JSON to the result
                    result.push(JSON.parse(fileContent));
                } catch (error) {
                    console.error(
                        `Error reading or parsing file ${file}:`,
                        error,
                    );
                }
            }
        });

        return result;
    },
);
