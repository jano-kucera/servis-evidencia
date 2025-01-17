import type { InputSignal } from "@angular/core";
import { Component, input } from "@angular/core";
import type { Order } from "../models/order";

/**
 * Order component.
 */
@Component({
    selector: "app-order",
    templateUrl: "./order.component.html",
})
export class OrderComponent {
    /** Order to show and edit. */
    public readonly $order: InputSignal<Order> = input.required<Order>();
}
