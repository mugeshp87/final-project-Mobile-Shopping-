/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { products } from '../interfaces';
import { CartService } from './cart.service';

describe('Service: Cart', () => {
  let service:CartService;
  let product:products;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
    });
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
