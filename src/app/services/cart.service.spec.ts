/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { products } from '../interfaces';
import { CartService } from './cart.service';
import { BehaviorSubject } from 'rxjs';
describe('Service: Cart', () => {
  let cartService: CartService;
  let product: products;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
    });
    cartService = new CartService();
  });
  it('should add a product to the cart', () => {
    const product: any = {
      id: 1,
      Name: 'IQOO 11 (5G)  Legend',
      Price: 59999,
      Image:
        'https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1673263735488/7a1a2eed480623e72636a02c9e7ea65f.png.webp',
      Variant: '8GB+256GB',
    };
    const expectedCartItems = [product];

    cartService.addtocart(product);

    const currentCartItems = cartService.productList.getValue();

    expect(currentCartItems).toEqual(expectedCartItems);
  });
  it('should remove a product from the cart', () => {
    const product1: any = { id: 1, name: 'Test Product 1', price: 10 };
    const product2: any = { id: 2, name: 'Test Product 2', price: 20 };
    const expectedCartItems = [product1];

    cartService.addtocart(product1);
    cartService.addtocart(product2);

    cartService.removeitemcart(product1);

    const currentCartItems = cartService.productList.getValue();

    expect(currentCartItems).toEqual(expectedCartItems);
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
