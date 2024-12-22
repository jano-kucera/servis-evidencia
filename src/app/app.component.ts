import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

/**
 * Application's root component.
 */
@Component({
    imports: [RouterOutlet],
    selector: "app-root",
    styleUrl: "./app.component.scss",
    templateUrl: "./app.component.html",
})
export class AppComponent {}
