import { DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import type { Order } from "../models/order";
import { OrdersService } from "../services/orders.service";

/**
 * Order selector component.
 */
@Component({
    imports: [
        DatePipe,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
    ],
    selector: "app-order-selector",
    styleUrl: "./order-selector.component.scss",
    templateUrl: "./order-selector.component.html",
})
export class OrderSelectorComponent {
    /** Orders service. */
    public ordersService: OrdersService = inject(OrdersService);

    /** Selected order. */
    public selectedOrder: Order;

    /**
     * Parses the selected order to an usable object.
     * @param raw Raw order string.
     */
    public selectOrder(raw: string): void {
        this.selectedOrder = JSON.parse(raw);
    }
}
