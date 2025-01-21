import type { ResourceRef, WritableSignal } from "@angular/core";
import { effect, Injectable, resource, signal } from "@angular/core";
import type { Order } from "../models/order";

/**
 * Orders service - holds all read orders.
 */
@Injectable({ providedIn: "root" })
export class OrdersService {
    /** Folder path to the orders. */
    public $folderPath: WritableSignal<string> = signal(".data");

    /** Loaded orders from the set folder. */
    public $orders: ResourceRef<Order[]> = resource({
        // eslint-disable-next-line @typescript-eslint/typedef
        loader: async ({ request }) => {
            // get raw content of all files in the folder
            const rawFiles = await window.app.loadFiles({
                dirPath: request.path,
                extension: ".json",
            });

            // parse the raw content to objects
            const parsedFiles = rawFiles.map((raw: string) => {
                try {
                    return JSON.parse(raw);
                } catch {
                    return undefined;
                }
            });

            // return only the parsed files
            return parsedFiles.filter((parsed: Order) => !!parsed);
        },
        request: () => ({ path: this.$folderPath() }),
    });

    /** Selected order. */
    public selectedOrder: Order;

    /**
     *
     */
    constructor() {
        effect(() => (this.selectedOrder = this.$orders.value()?.[0]));
    }
}
