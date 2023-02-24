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
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatSortModule } from '@angular/material/sort';

describe('ViewproductsComponent', () => {
  let component: ViewproductsComponent;
  let fixture: ComponentFixture<ViewproductsComponent>;
  let row: any;
  let dialog: jasmine.SpyObj<MatDialog>;
  let event: Event;
  let id: number;
  let data: any;
  let service: AdminserviceService;
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
  it('should', () => {
    expect(component.editproduct(data)).toHaveBeenCalled;
  });
  it('should', () => {
    expect(component.applyFilter(data)).toHaveBeenCalled();
  });
  it('should delete a product and display success message', () => {
    // Arrange
    const id = 1;
    const service = TestBed.inject(AdminserviceService);
    spyOn(service, 'deleteproduct').and.returnValue(of({}));
    const toastr = TestBed.inject(ToastrService);
    spyOn(toastr, 'success');
    const component = TestBed.createComponent(
      ViewproductsComponent
    ).componentInstance;

    // Act
    component.deleteproduct(id);

    // Assert
    expect(service.deleteproduct).toHaveBeenCalledWith(id);
    expect(toastr.success).toHaveBeenCalledWith('Product Deleted Successfully');
  });
});
describe('ViewProductsComponent', () => {
  let component: ViewproductsComponent;
  let fixture: ComponentFixture<ViewproductsComponent>;
  let service: AdminserviceService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewproductsComponent],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AdminserviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch admin products and set up data source', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    spyOn(service, 'getadminproducts').and.returnValue(of(products));
    fixture.detectChanges();

    expect(component.productvalue).toEqual(products);
    expect(component.dataSource.data).toEqual(products);
    expect(component.dataSource.paginator).toBeDefined();
    expect(component.dataSource.sort).toBeDefined();
    expect(component.dataSource.paginator).toEqual(component.paginator);
    expect(component.dataSource.sort).toEqual(component.sort);
  });

  it('should call getadminproducts method of service', () => {
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    service.getadminproducts().subscribe((res) => {
      expect(res).toEqual(products);
    });

    const req = httpMock.expectOne('/api/admin/products');
    expect(req.request.method).toBe('GET');
    req.flush(products);
  });
});
