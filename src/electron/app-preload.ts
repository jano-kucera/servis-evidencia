// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./global.d.ts" />

import { ipcRenderer } from "electron";
import type { LoadFilesEventData } from "./app-events";
import { AppEvent } from "./app-events";
import type { AppInterface } from "./app-interface";

(window as any).app = {
    loadFiles: (data: LoadFilesEventData): Promise<Record<string, string>> => {
        return ipcRenderer.invoke(AppEvent.LoadFiles, data);
    },
} satisfies AppInterface;
