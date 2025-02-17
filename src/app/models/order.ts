import type { Item } from "./item";

/**
 * Order in the system.
 */
export interface Order {
    /** Customer. */
    customer: string;

    /** Order's filepath. */
    filePath: string;

    /** Order's items. */
    items: Item[];

    /** Car's license plate. */
    licensePlate: string;

    /** Car manufacturer. */
    manufacturer: string;

    /** Car model. */
    model: string;

    /** Order's notes. */
    notes: string;

    /** Car's VIN. */
    vin: string;

    /** Work started date. */
    workEnded: Date;

    /** Work ended date. */
    workStarted: Date;
}
