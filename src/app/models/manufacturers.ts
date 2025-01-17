/**
 * Car manufacturers.
 */
export type Manufacturer = (typeof Manufacturer)[keyof typeof Manufacturer];
// eslint-disable-next-line jsdoc/require-jsdoc
export const Manufacturer = {
    AlfaRomeo: "Alfa Romeo",
    Audi: "Audi",
    Bentley: "Bentley",
    Bmw: "BMW",
    Bugatti: "Bugatti",
    Citroen: "Citroën",
    Cupra: "Cupra",
    Dacia: "Dacia",
    Ferrari: "Ferrari",
    Fiat: "Fiat",
    Jaguar: "Jaguar",
    Lamborghini: "Lamborghini",
    LandRover: "Land Rover",
    Maserati: "Maserati",
    MercedesBenz: "Mercedes-Benz",
    Mini: "Mini",
    Opel: "Opel",
    Peugeot: "Peugeot",
    Porsche: "Porsche",
    Renault: "Renault",
    RollsRoyce: "Rolls-Royce",
    Seat: "SEAT",
    Skoda: "Škoda",
    Volkswagen: "Volkswagen",
    Volvo: "Volvo",
} as const;
