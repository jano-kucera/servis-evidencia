import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { OrdersService } from "../services/orders.service";

/**
 * Order component.
 */
@Component({
    imports: [
        FormsModule,
        JsonPipe,
        MatAutocompleteModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
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
}
