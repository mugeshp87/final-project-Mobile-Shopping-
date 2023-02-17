/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('Service: Productsservice', () => {
  let service:ProductsserviceService;
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [ProductsserviceService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(ProductsserviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ HttpClientTestingModule ],
  //     providers: [ MyService ]
  //   });

  afterEach(() => {
    httpMock.verify();
  });
  // it('should ...', inject(
  //   [ProductsserviceService],
  //   (service: ProductsserviceService) => {
  //     expect(service).toBeTruthy();
  //   }
  // ));

  afterEach(() => {
    httpMock.verify();
  });
  it('should post data to the server', () => {
    const data = { name: 'Product 1', price: 10 };
    const response = { message: 'Order received successfully' };

    service.orderedproducts(data).subscribe(res => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(`${service.ordersurl}`);
    expect(req.request.method).toBe('POST');
    req.flush(response);
});
});
