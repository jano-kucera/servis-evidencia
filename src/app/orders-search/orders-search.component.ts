import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { OrdersService } from "../services/orders.service";

/**
 * Orders search component.
 */
@Component({
    imports: [FormsModule, MatInputModule, MatIconModule],
    selector: "app-orders-search",
    styleUrl: "./orders-search.component.scss",
    templateUrl: "./orders-search.component.html",
})
export class OrdersSearchComponent {
    /** Orders service. */
    public ordersService: OrdersService = inject(OrdersService);
}
