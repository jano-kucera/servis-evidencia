import { DatePipe, JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { OrdersService } from "../services/orders.service";

/**
 * Order component.
 */
@Component({
    imports: [DatePipe, JsonPipe],
    selector: "app-order",
    templateUrl: "./order.component.html",
})
export class OrderComponent {
    /** Orders service. */
    public ordersService: OrdersService = inject(OrdersService);
}
