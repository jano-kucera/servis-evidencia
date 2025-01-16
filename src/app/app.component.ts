import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FolderScanComponent } from "./folder-scan/folder-scan.component";

/**
 * Application's root component.
 */
@Component({
    imports: [FolderScanComponent, RouterOutlet],
    selector: "app-root",
    styleUrl: "./app.component.scss",
    templateUrl: "./app.component.html",
})
export class AppComponent {}
