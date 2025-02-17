/* eslint-disable-next-line jsdoc/require-jsdoc */
export {};

declare global {
    /* eslint-disable-next-line jsdoc/require-jsdoc */
    interface Window {
        /** Electron's main process API. */
        app: {
            /** Loads files in the given folder with given extension. */
            loadFiles: (data: {
                /** Dir path. */
                dirPath: string;
                /** File extension. */
                extension: string;
            }) => Promise<Record<string, string>>;
        };
    }
}
