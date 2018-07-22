export class Car {
    id: number;
    brand: string;
    model: string;
    description: string;
    registrationNumber: any;
    fuelType: string;
    transmission: string;

    constructor(id: number, brand: string, model: string, description: string, registrationNumber: any, fuelType: string, transmission: string) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.description = description;
        this.registrationNumber = registrationNumber;
        this.fuelType = fuelType;
        this.transmission = transmission;
    }
}
