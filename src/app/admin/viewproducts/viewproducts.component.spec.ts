/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewproductsComponent } from './viewproducts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder } from '@angular/forms';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { of } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { By } from '@angular/platform-browser';

describe('ViewproductsComponent', () => {
  let component: ViewproductsComponent;
  let fixture: ComponentFixture<ViewproductsComponent>;
  let row: any;
  let dialog: jasmine.SpyObj<MatDialog>;
  let event: Event;
  let id: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        MatToolbar,
        MatFormField,
        MatIcon,
        MatPaginator,
        MatTableDataSource,
        FormBuilder,
      ],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);
    fixture = TestBed.createComponent(ViewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get admin products when ngOnChanges is called', () => {
    // arrange
    const service = TestBed.inject(AdminserviceService);
    spyOn(service, 'getadminproducts').and.returnValue(of('mocked data'));
    const component = fixture.componentInstance;

    // act
    component.ngOnChanges();

    // assert
    expect(service.getadminproducts).toHaveBeenCalled();
    expect(component.productvalue).toEqual('mocked data');
  });

  it('should call userService.delete and show toastr message on success', () => {
    const userService = TestBed.inject(AdminserviceService);
    spyOn(userService, 'deleteproduct').and.returnValue(of<any>(null));
    spyOn(TestBed.inject(ToastrService), 'success');
    component.deleteproduct(123);
    expect(userService.deleteproduct).toHaveBeenCalledWith(123);
    expect(component.getproducts()).toHaveBeenCalled();
    expect(TestBed.inject(ToastrService).success).toHaveBeenCalledWith();
  });
  it('should open a dialog and get products if value is "Save"', () => {
    const dialogRefSpy = jasmine.createSpyObj('DialogRef', ['afterClosed']);
    dialogRefSpy.afterClosed.and.returnValue(of('Save'));
    dialog.open.and.returnValue(dialogRefSpy);
    spyOn(component, 'getproducts');
    component.openDialog();
    expect(dialog.open).toHaveBeenCalled();
    expect(component.getproducts).toHaveBeenCalled();
  });

  it('should not get products if value is not "Save"', () => {
    const dialogRefSpy = jasmine.createSpyObj('DialogRef', ['afterClosed']);
    dialogRefSpy.afterClosed.and.returnValue(of('Cancel'));
    dialog.open.and.returnValue(dialogRefSpy);
    spyOn(component, 'getproducts');
    component.openDialog();
    expect(dialog.open).toHaveBeenCalled();
    expect(component.getproducts).not.toHaveBeenCalled();
  });
});
