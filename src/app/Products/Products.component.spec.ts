/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './Products.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let cartService:CartService;
  let toastrService:ToastrService;
  let fixture: ComponentFixture<ProductsComponent>;
  let item :any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [HttpClient, HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('should call the addtocart method on the CartService with the given item', () => {
  //   // Arrange

  //   // Act
  //   component.addtocart(item);

  //   // Assert
  //   expect(cartService.addtocart).toHaveBeenCalledWith(item);
  // });
  // it('should display a success message using the Toastr service', () => {
  //   // Arrange
  //   spyOn(toastrService, 'success');

  //   // Act
  //   component.addtocart(item);

  //   // Assert
  //   expect(toastrService.success).toHaveBeenCalledWith('Product Added To The Cart Successfully!!');
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('',()=>{
    component.addtocart(item)
  })

});
