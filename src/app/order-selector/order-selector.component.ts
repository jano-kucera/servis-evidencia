import { DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { QueryPipe } from "../pipes/query.pipe";
import { OrdersService } from "../services/orders.service";

/**
 * Order selector component.
 */
@Component({
    imports: [
        DatePipe,
        FormsModule,
        MatCardModule,
        QueryPipe,
    ],
    selector: "app-order-selector",
    styleUrl: "./order-selector.component.scss",
    templateUrl: "./order-selector.component.html",
})
export class OrderSelectorComponent {
    /** Orders service. */
    public ordersService: OrdersService = inject(OrdersService);
}
