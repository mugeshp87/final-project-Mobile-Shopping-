/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewproductsComponent } from './viewproducts.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
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
  let row:any;
  let event:Event;
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
        FormBuilder
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
    fixture = TestBed.createComponent(ViewproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  it('should get admin products and call getproducts() when ngOnInit is called', () => {
    // arrange
    const service = TestBed.inject(AdminserviceService);
    spyOn(service, 'getadminproducts').and.returnValue(of('mocked data'));
    const toastr = TestBed.inject(ToastrService);
    spyOn(toastr, 'error');
    const component = fixture.componentInstance;
    spyOn(component, 'getproducts');
  
    // act
    component.ngOnInit();
  
    // assert
    expect(service.getadminproducts).toHaveBeenCalled();
    expect(component.productvalue).toEqual('mocked data');
    expect(component.getproducts).toHaveBeenCalled();
    expect(toastr.error).not.toHaveBeenCalled();
  });
  // it('should set productvalue and dataSource when getproducts is called', () => {
  //   // arrange
  //   const service = TestBed.inject(AdminserviceService);
  //   spyOn(service, 'getadminproducts').and.returnValue(of('mocked data'));
  //   const component = fixture.componentInstance;
  //   component.paginator = {
  //     pageIndex: 0,
  //     pageSize: 10,
  //     length: 100,
  //   } as MatPaginator;
  //   component.sort = {
  //     active: 'id',
  //     direction: 'asc',
  //   } as MatSort;
  
  //   // act
  //   component.getproducts();
  
  //   // assert
  //   expect(service.getadminproducts).toHaveBeenCalled();
  //   expect(component.productvalue).toEqual('mocked data');
  //   expect(component.dataSource).toBeDefined();
  //   expect(component.dataSource.data).toEqual('mocked data');
  //   expect(component.dataSource.paginator).toEqual(component.paginator);
  //   expect(component.dataSource.sort).toEqual(component.sort);
  // });
  it('should apply filter to dataSource and move to first page if available when applyFilter is called', () => {
    // arrange
    const component = fixture.componentInstance;
    const dataSource = new MatTableDataSource(['Apple', 'Banana', 'Orange']);
    component.dataSource = dataSource;
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Banana';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // act
    component.applyFilter(new Event('input'));
  
    // assert
    expect(component.dataSource.filter).toEqual('banana');
    expect(component.dataSource.paginator?.pageIndex).toEqual(0);
  });
  it('should apply filter to dataSource and move to first page if available when applyFilter is called', () => {
    // arrange
    const component = fixture.componentInstance;
    const dataSource = new MatTableDataSource(['Apple', 'Banana', 'Orange']);
    component.dataSource = dataSource;
    component.paginator = {
      pageIndex: 1,
      pageSize: 10,
      length: 100,
      firstPage: () => {},
    } as MatPaginator;
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Banana';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    // act
    component.applyFilter(new Event('input'));
  
    // assert
    expect(component.dataSource.filter).toEqual('banana');
    expect(component.dataSource.paginator?.pageIndex).toEqual(0);
  });
  // it('should call the service to delete a product and display a success message when deleteproduct is called', () => {
  //   // arrange
  //   const component = fixture.componentInstance;
  //   spyOn(component.service, 'deleteproduct').and.returnValue(of({}));
  //   spyOn(component.toastr, 'success');
  //   const productId = 123;
  
  //   // act
  //   component.deleteproduct(productId);
  
  //   // assert
  //   expect(component.service.deleteproduct).toHaveBeenCalledWith(productId);
  //   expect(component.toastr.success).toHaveBeenCalledWith('Product Deleted Successfully');
  // });
  // it('should call the service to delete a product and display a success message when deleteproduct is called', () => {
  //   // arrange
  //   const component = fixture.componentInstance;
  //   spyOn(component.service, 'deleteproduct').and.returnValue(of({}));
  //   spyOn(component.toastr, 'success');
  //   const productId = 123;
  
  //   // act
  //   component.deleteproduct(productId);
  
  //   // assert
  //   expect(component.service.deleteproduct).toHaveBeenCalledWith(productId);
  //   expect(component.toastr.success).toHaveBeenCalledWith('Product Deleted Successfully');
  // });
  
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('',()=>{
    component.openDialog();
  })
  it('',()=>{
    component.editproduct(row);
  })
  it('',()=>{
    component.applyFilter(event);
  })
});
