import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent implements OnInit {
  brand: string;
  model: string;
  description: string;
  registrationNumber: string;
  fuelType: string;
  transmission: string;


  constructor(public router: Router, private carService: CarService) {
    this.brand = '';
    this.model = '';
    this.description = '';
    this.registrationNumber = '';
    this.fuelType = '';
    this.transmission = '';
  }

  ngOnInit() {

  }

  onSubmit(form: NgForm): void {
    if(form.valid) {
      this.brand = form.value.brand;
      this.model = form.value.model;
      this.description = form.value.description;
      this.registrationNumber = form.value.registernumber;
      this.fuelType = form.value.fueltype;
      this.transmission = form.value.transmission;

      this.carService.addCar(this.brand, this.model, this.description, this.registrationNumber, this.fuelType, this.transmission);

      form.reset();
      this.router.navigateByUrl('/');
    }
  }
}