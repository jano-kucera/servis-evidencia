/**
 * Order in the system.
 */
export interface Order {
    /** Customer. */
    customer: string;

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
