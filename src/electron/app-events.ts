/**
 * Enum for app events.
 */
export enum AppEvent {
    LoadFiles = "LoadFiles",
}

/**
 * Load files event data parameters.
 */
export type LoadFilesEventData = Parameters<Window["app"]["loadFiles"]>[0];
