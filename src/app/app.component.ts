import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { OrderComponent } from "./order/order.component";
import { OrderSelectorComponent } from "./order-selector/order-selector.component";

/**
 * Application's root component.
 */
@Component({
    imports: [
        OrderComponent,
        OrderSelectorComponent,
        RouterOutlet,
    ],
    selector: "app-root",
    styleUrl: "./app.component.scss",
    templateUrl: "./app.component.html",
})
export class AppComponent {}
