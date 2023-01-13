/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';

describe('Service: Productsservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsserviceService]
    });
  });

  it('should ...', inject([ProductsserviceService], (service: ProductsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
