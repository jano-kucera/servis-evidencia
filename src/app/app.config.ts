import { registerLocaleData } from "@angular/common";
import localeSk from "@angular/common/locales/sk";
import type { ApplicationConfig } from "@angular/core";
import { LOCALE_ID, provideZoneChangeDetection } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

registerLocaleData(localeSk);

/**
 * Application configuration.
 */
export const appConfig: ApplicationConfig = {
    providers: [
        { provide: LOCALE_ID, useValue: "sk-SK" },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
    ],
};
