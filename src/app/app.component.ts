import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { OrderComponent } from "./order/order.component";
import { OrderSelectorComponent } from "./order-selector/order-selector.component";
import { OrdersSearchComponent } from "./orders-search/orders-search.component";

/**
 * Application's root component.
 */
@Component({
    imports: [
        MatDividerModule,
        OrderComponent,
        OrderSelectorComponent,
        OrdersSearchComponent,
    ],
    selector: "app-root",
    styleUrl: "./app.component.scss",
    templateUrl: "./app.component.html",
})
export class AppComponent {}
