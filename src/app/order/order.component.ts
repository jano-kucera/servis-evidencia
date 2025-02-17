import { DecimalPipe } from "@angular/common";
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
import type { Item } from "../models/item";
import { OrdersService } from "../services/orders.service";

/**
 * Order component.
 */
@Component({
    imports: [
        DecimalPipe,
        FormsModule,
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
     * Add new item to the order.
     */
    public addNewItem(): void {
        if (this.ordersService.selectedOrder) {
            this.ordersService.selectedOrder.items.push({
                description: "",
                name: "",
                // eslint-disable-next-line no-null/no-null
                price: null,
                // eslint-disable-next-line no-null/no-null
                quantity: null,
            });

            // update the reference to trigger change detection
            this.ordersService.selectedOrder.items = [
                ...this.ordersService.selectedOrder.items,
            ];
        }
    }

    /**
     * Delete the item from the order.
     * @param item Item to delete.
     */
    public deleteItem(item: Item): void {
        this.ordersService.selectedOrder.items =
            this.ordersService.selectedOrder.items.filter(
                (i: Item) => i !== item,
            );
    }

    /**
     * Gets the order sum.
     * @returns Order sum.
     */
    // eslint-disable-next-line no-restricted-syntax
    public get orderSum(): number {
        return this.ordersService.selectedOrder.items.reduce(
            (sum: number, item: Item) => sum + item.price * item.quantity,
            0,
        );
    }
}
