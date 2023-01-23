import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { AdminRoutes } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbar, MatToolbarModule} from "@angular/material/toolbar"
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from './dialog/dialog.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import{MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [
    AdminhomeComponent,
    ViewproductsComponent,UpdateproductsComponent,AddproductsComponent,DialogComponent
  ],
  imports: [
    CommonModule,FormsModule,ToastrModule.forRoot(),MatDialogModule,MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,MatFormFieldModule,MatPaginatorModule,MatSortModule,ReactiveFormsModule,FormsModule,MatInputModule,AdminRoutes]
})
export class AdminModule { }
