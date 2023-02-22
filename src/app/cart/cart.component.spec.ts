/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { products } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProductsserviceService } from '../services/productsservice.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let item: any;
  let data: products;
  let productservice: ProductsserviceService;
  let router: Router;
  let cart: CartService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        HttpClient,
        HttpHandler,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should increase the quantity of an item by 1 and show a message if the limit of 5 units is reached', () => {
    // Arrange
    const item = { id: 1, quantity: 3 };
    const cart = jasmine.createSpyObj('cart', ['getTotalPrice']);
    const toastr = jasmine.createSpyObj('toastr', ['info']);
    component.cart = cart;
    component.toastr = toastr;

    // Act
    component.increaseproduct(item);

    // Assert
    expect(item.quantity).toBe(4);
    expect(toastr.info).not.toHaveBeenCalled();

    // Act
    component.increaseproduct(item);

    // Assert
    expect(item.quantity).toBe(5);
    expect(toastr.info).toHaveBeenCalled();

    // Act
    component.increaseproduct(item);

    // Assert
    expect(item.quantity).toBe(5);
    expect(toastr.info).toHaveBeenCalledTimes(1);
  });
  it('should limit the quantity to 5 and display a message if the quantity exceeds 5', () => {
    const toastrSpy = spyOn(component.toastr, 'info');
    const item = { quantity: 6 };
    component.increaseproduct(item);
    expect(item.quantity).toBe(5);
    expect(toastrSpy).toHaveBeenCalledWith('You Can Add Upto 5 Units Only');
  });
  it('should decrease the quantity of an item in the cart', () => {
    // Create a test item
    const item: any = {
      id: 1,
      name: 'Test Item',
      price: 10.99,
      quantity: 3,
    };

    // Add the item to the cart
    component.cart.addtocart(item);

    // Call the decreaseproduct method with the test item
    component.decreaseproduct(item);

    // Expect the item quantity to be decreased by 1
    expect(item.quantity).toEqual(2);
  });
  it('should decrease the quantity of a product in the cart', () => {
    // Set up test data
    const item = { id: 1, name: 'Product 1', price: 10, quantity: 2 };
    const cart = {
      items: [item],
      getTotalPrice: () => {},
      removeitemcart: () => {},
    };
    spyOn(cart, 'getTotalPrice');
    spyOn(cart, 'removeitemcart');

    // Call the function being tested
    component.cart = cart as any;
    component.decreaseproduct(item);

    // Check that the quantity was decreased
    expect(item.quantity).toBe(1);

    // Check that the total price was updated
    expect(cart.getTotalPrice).toHaveBeenCalled();

    // Check that ngOnInit was called
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('should update product properties, navigate to success page, send order to server, and navigate to home page after 3 seconds', fakeAsync(() => {
    // mock user

    const mockUser: any = { Username: 'testuser' };
    localStorage.setItem('LoggedInUser', JSON.stringify(mockUser));

    // mock data
    const mockData: any = [{ id: 1, quantity: 2, Price: 10 }];

    // spy on the orderedproducts function of the productservice
    spyOn(productservice, 'orderedproducts').and.returnValue(of());

    // call the function
    component.success(mockData);
    tick();

    // assert that product properties were updated
    expect(mockData[0].total).toBe(20);
    expect(mockData[0].user).toBe(mockUser.Username);
    expect(mockData[0].id).toBeUndefined();

    // assert that the router navigated to the success page
    expect(router.navigate).toHaveBeenCalledWith(['success']);

    // assert that the orderedproducts function was called with the correct arguments
    expect(productservice.orderedproducts).toHaveBeenCalledWith(mockData);

    // advance time by 3 seconds
    tick(3000);

    // assert that the router navigated to the home page
    expect(router.navigate).toHaveBeenCalledWith(['home']);

    // assert that the cart was emptied
    expect(cart.removeallcart).toHaveBeenCalled();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('', () => {
    component.removeitemcart(item);
  });
  it('', () => {
    component.deletecart();
  });
  it('', () => {
    component.success(data);
  });

  it('', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnChanges();
    expect(component.ngOnChanges).toHaveBeenCalled();
  });
});
