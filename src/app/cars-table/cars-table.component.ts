import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {
  closeResult: string;

  id: number;
  brand: string;
  model: string;
  description: string;
  registrationNumber: string;
  fuelType: string;
  transmission: string;

  constructor(public router: Router,
              private carService: CarService,
              private modalService: NgbModal) {
    this.id = null;
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
      this.id = form.value.id;
      this.brand = form.value.brand;
      this.model = form.value.model;
      this.description = form.value.description;
      this.registrationNumber = form.value.registernumber;
      this.fuelType = form.value.fueltype;
      this.transmission = form.value.transmission;

      this.carService.updateCar(this.id, this.brand, this.model, this.description, this.registrationNumber, this.fuelType, this.transmission);
    }
  }

  open(content): any {
    this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
