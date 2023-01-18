import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AdminRoutes } from './admin.routing';
import { FormsModule } from '@angular/forms';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AdminhomeComponent,
    ViewproductsComponent,UpdateproductsComponent,AddproductsComponent
  ],
  imports: [
    CommonModule,FormsModule,AdminRoutes]
})
export class AdminModule { }
