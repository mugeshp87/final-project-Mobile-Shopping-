/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  MatFormField,
  MatFormFieldModule,
  MAT_FORM_FIELD,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { of } from 'rxjs';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let apicall: AdminserviceService;
  let ToasterSpy: ToastrService;
  let DialogRef: MatDialogRef<DialogComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      providers: [
        FormBuilder,
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        MatDialog,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_FORM_FIELD, useValue: {} },
        MatFormField,
        MatInput,
      ],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add a new product if form is valid and editdata is falsy', () => {
    // create a spy for the addadminproducts method
    const addAdminProductsSpy = spyOn(
      apicall,
      'addadminproducts'
    ).and.returnValue(of('success'));

    // set the productform to a valid state
    component.productform.setValue({
      name: 'Test Product',
      price: 9.99,
      description: 'A test product',
      image: 'test.jpg',
      category: 'test',
    });

    // set editdata to falsy
    component.editdata = null;

    // call the addproduct method
    component.addproduct();

    // check that the addadminproducts method was called with the correct data
    expect(addAdminProductsSpy).toHaveBeenCalledWith({
      name: 'Test Product',
      price: 9.99,
      description: 'A test product',
      image: 'test.jpg',
      category: 'test',
    });

    // check that toaster.success was called
    expect(ToasterSpy.success).toHaveBeenCalledWith(
      'Product Added Successfully'
    );

    // check that productform was reset
    expect(component.productform.value).toEqual({
      name: null,
      price: null,
      description: null,
      image: null,
      category: null,
    });

    // check that dialogref.close was called with 'Save'
    expect(DialogRef.close).toHaveBeenCalledWith('Save');
  });

  it('should update a product if editdata is truthy', () => {
    // create a spy for the updateproduct method
    const updateProductSpy = spyOn(component, 'updateproduct');

    // set editdata to a truthy value
    component.editdata = {
      id: 1,
      name: 'Test Product',
      price: 9.99,
      description: 'A test product',
      image: 'test.jpg',
      category: 'test',
    };

    // call the addproduct method
    component.addproduct();

    // check that the updateproduct method was called
    expect(updateProductSpy).toHaveBeenCalled();
  });
});
