import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from "@angular/material/table";
import { OrdersService } from "../services/orders.service";

/**
 * Order component.
 */
@Component({
    imports: [
        FormsModule,
        JsonPipe,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTableModule,
    ],
    selector: "app-order",
    styleUrl: "./order.component.scss",
    templateUrl: "./order.component.html",
})
export class OrderComponent {
    /** Orders service. */
    public ordersService: OrdersService = inject(OrdersService);

    /** Editing flag. */
    public editing: boolean = true;

    /**
     *
     */
    public get orderSum(): number {
        console.log("calc");
        return this.ordersService.selectedOrder.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
    }
}
