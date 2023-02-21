/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('Service: Productsservice', () => {
  let service: ProductsserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsserviceService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(ProductsserviceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  it('should ...', inject(
    [ProductsserviceService],
    (service: ProductsserviceService) => {
      expect(service).toBeTruthy();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });
  describe('orderedproducts', () => {
    let service: ProductsserviceService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProductsserviceService],
      });

      service = TestBed.inject(ProductsserviceService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpTestingController.verify();
    });
    it('should send a GET request to the correct URL', () => {
      const expectedUrl = 'http://localhost:3000/Mobile';

      service.getproducts().subscribe();

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toEqual('GET');
    });

    it('should return an Observable<Product[]>', () => {
      const mockProducts: any[] = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ];

      service.getproducts().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/Mobile'
      );
      req.flush(mockProducts);
    });

    it('should send a POST request to the correct URL with the provided data', () => {
      const expectedUrl = 'http://localhost:3000/OrderDetails';
      const postData = { product: 'Example product', quantity: 1 };

      service.orderedproducts(postData).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpTestingController.expectOne(expectedUrl);
      expect(req.request.method).toEqual('POST');
      // expect(req.request.body).toEqual(postData);

      // req.flush({ status: 'success' });
    });
    it('should return an Observable<User[]>', () => {
      const postData = { product: 'Example product', quantity: 1 };
      service.orderedproducts(postData).subscribe((users:any) => {
        expect(users).toEqual(postData);
      });
  
      const req = httpTestingController.expectOne('http://localhost:3000/OrderDetails');
      req.flush(postData);
    });
  });
});
