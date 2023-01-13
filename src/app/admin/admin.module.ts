import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AdminRoutes } from './admin.routing';
@NgModule({
  declarations: [
    AdminhomeComponent,
    ViewproductsComponent
  ],
  imports: [
    CommonModule,AdminRoutes
  ]
})
export class AdminModule { }
