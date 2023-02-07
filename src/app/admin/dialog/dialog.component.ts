import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  productform!: FormGroup;
  actionbutton: string = 'Save';
  product: any;
  constructor(
    private formbuilder: FormBuilder,
    private apicall: AdminserviceService,
    private toaster: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogref: MatDialogRef<DialogComponent>
  ) {}
  ngOnInit() {
    this.productform = this.formbuilder.group({
      id: ['', Validators.required],
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Image: ['', Validators.required],
      Variant: ['', Validators.required],
    });
    console.log(this.editdata);
    if (this.editdata) {
      this.actionbutton = 'Update';
      this.productform.controls['id'].setValue(this.editdata.id);
      this.productform.controls['Name'].setValue(this.editdata.Name);
      this.productform.controls['Price'].setValue(this.editdata.Price);
      this.productform.controls['Image'].setValue(this.editdata.Image);
      this.productform.controls['Variant'].setValue(this.editdata.Variant);
    }
  }
  addproduct() {
    if (!this.editdata) {
      if (this.productform.valid) {
        this.apicall.addadminproducts(this.productform.value).subscribe({
          next: (res) => {
            this.toaster.success('Product Added Succesfully');
            this.productform.reset();
            this.dialogref.close('Save');
          },
        });
      }
    } else {
      this.updateproduct();
    }
  }
  updateproduct() {
    this.apicall
      .updateproduct(this.productform.value, this.editdata.id)
      .subscribe((res) => {
        this.product = res;
        this.toaster.success('Product Updated Successfully');
        this.productform.reset();
        this.dialogref.close('Update');
      },
      (error) => {
        this.toaster.error('Error Occurs');
      });
  }
}
