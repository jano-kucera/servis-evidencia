/* eslint-disable-next-line jsdoc/require-jsdoc */
export {};

declare global {
    /* eslint-disable-next-line jsdoc/require-jsdoc */
    interface Window {
        /** Electron's main process API. */
        app: {
            /** Loads JSON files in the given folder. */
            loadJsonFiles: (folderPath: string) => Promise<string[]>;
        };
    }
}
