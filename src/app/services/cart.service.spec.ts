/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { products } from '../interfaces';
import { CartService } from './cart.service';
import { BehaviorSubject } from 'rxjs';
describe('Service: Cart', () => {
  let cartService:CartService;
  let product:products;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
    });
    cartService=new CartService()
  });
  it('should add a product to the cart', () => {
    const product: any = { "id": 1,
    "Name": "IQOO 11 (5G)  Legend",
    "Price": 59999,
    "Image": "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1673263735488/7a1a2eed480623e72636a02c9e7ea65f.png.webp",
    "Variant": "8GB+256GB",
   };
    const expectedCartItems = [product];

    // Add product to cart
    cartService.addtocart(product);

    // Get current cart items
    const currentCartItems = cartService.productList.getValue();

    // Check if product was added to the cart
    expect(currentCartItems).toEqual(expectedCartItems);
  });
  it('should remove a product from the cart', () => {
    const product1: any = { id: 1, name: 'Test Product 1', price: 10 };
    const product2: any= { id: 2, name: 'Test Product 2', price: 20 };
    const expectedCartItems = [product1];

    // Add products to cart
    cartService.addtocart(product1);
    cartService.addtocart(product2);

    // Remove product1 from cart
    cartService.removeitemcart(product1);

    // Get current cart items
    const currentCartItems = cartService.productList.getValue();

    // Check if product1 was removed from the cart
    expect(currentCartItems).toEqual(expectedCartItems);
  });


  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
