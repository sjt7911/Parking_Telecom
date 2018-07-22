import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsTableComponent,
    AddCarFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'Car',
      storageType: 'localStorage'
    }),
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'index', component:  AppComponent },
      { path: 'add-car', component: AddCarFormComponent }
    ])
  ],
  providers: [
      CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
