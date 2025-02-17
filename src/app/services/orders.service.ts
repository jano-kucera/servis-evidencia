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

    /** Search query. */
    public $searchQuery: WritableSignal<string> = signal("");

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
            // eslint-disable-next-line prettier/prettier
            const parsedFiles = Object.entries(rawFiles).map(([path, raw]: [string, string]) => {
                    try {
                        const order: Order = JSON.parse(raw);
                        order.filePath = path;
                        return order;
                    } catch {
                        return undefined;
                    }
                },
            );

            // return only the parsed files
            return parsedFiles.filter((parsed: Order) => !!parsed);
        },
        request: () => ({ path: this.$folderPath() }),
    });

    /** Selected order. */
    public selectedOrder: Order;

    /**
     * Constructor.
     */
    constructor() {
        // preselect the first order
        effect(() => (this.selectedOrder = this.$orders.value()?.[0]));
    }
}
