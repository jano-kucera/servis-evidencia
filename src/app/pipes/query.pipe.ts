import type { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import type { Order } from "../models/order";

/**
 * Query pipe.
 */
@Pipe({ name: "appQuery" })
export class QueryPipe implements PipeTransform {
    /**
     * Queries the the orders list by the given query.
     * @param orders Orders list.
     * @param query Query to search.
     * @returns Filtered orders list.
     */
    public transform(orders: Order[], query: string): Order[] {
        if (!query) {
            return orders;
        }

        const lowerQuery: string = query.toLowerCase();

        return orders.filter((order: Order) =>
            JSON.stringify(order).toLowerCase().includes(lowerQuery),
        );
    }
}
