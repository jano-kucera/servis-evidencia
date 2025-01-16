// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./global.d.ts" />

import { ipcRenderer } from "electron";
import { AppEvent } from "./app-events";
import type { AppInterface } from "./app-interface";

(window as any).app = {
    loadJsonFiles: (dirPath: string): Promise<string[]> => {
        return ipcRenderer.invoke(AppEvent.LoadJsonFiles, dirPath);
    },
} satisfies AppInterface;
