import type { Manufacturer } from "./manufacturers";

/**
 * Order in the system.
 */
export interface Order {
    /** Brand. */
    brand: Manufacturer;

    /** Customer. */
    customer: string;

    /** Car's license plate. */
    licensePlate: string;

    /** Car's VIN. */
    vin: string;

    /** Work started date. */
    workEnded: Date;

    /** Work ended date. */
    workStarted: Date;
}
