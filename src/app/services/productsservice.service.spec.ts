/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';

describe('Service: Productsservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsserviceService, HttpClient, HttpHandler],
    });
  });

  it('should ...', inject(
    [ProductsserviceService],
    (service: ProductsserviceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
