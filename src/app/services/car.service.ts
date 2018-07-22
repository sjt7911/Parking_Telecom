import { Injectable } from '@angular/core';
import { Car } from  '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[];
  private nextId: number;

  constructor() {
    let cars = this.getCars();

    if (cars.length == 0) {
      this.nextId = 1;
    }
    else {
      let maxId = cars[cars.length - 1].id;

      this.nextId = maxId + 1;
    }
  }

  public addCar(brand: string, model: string, description: string, registrationNumber: any, fuelType: string,transmission: string): void {
    let car = new Car(this.nextId, brand, model, description, registrationNumber, fuelType,transmission);
    let cars = this.getCars();
    cars.push(car);

    this.setLocalStorageCars(cars);

    this.nextId++;
  }

  public getCars(): Car[] {
    let localStorageItem = JSON.parse(localStorage.getItem('cars'));
    return localStorageItem == null ? [] : localStorageItem.cars;
  }

  public deleteCar(id: number): void {
    let cars = this.getCars();

    cars = cars.filter((car) => car.id != id);
    this.setLocalStorageCars(cars);
  }

  public updateCar(id: number, brand: string, model: string, description: string, registrationNumber: any, fuelType: string, transmission: string): void {
    let cars = this.getCars();
    cars = cars.filter((car) => car.id != id);

    let car = new Car(id, brand, model, description, registrationNumber, fuelType, transmission);
    cars.push(car);
    this.setLocalStorageCars(cars);
  }

  private setLocalStorageCars(cars: Car[]): void {
    localStorage.setItem('cars', JSON.stringify({ cars: cars }));
  }
}
