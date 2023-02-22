/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
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
  });
});
describe('orderedproducts()', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let service: ProductsserviceService;

  beforeEach(() => {
    // Create a spy for the HttpClient post method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    // Create a new instance of YourService using the HttpClient spy
    service = new ProductsserviceService(httpClientSpy as any);
  });

  it('should call the http.post method with the correct URL and data', () => {
    const mockData = { productId: 123, quantity: 2 };
    const expectedUrl = 'http://localhost:3000/OrderDetails';
    httpClientSpy.post.and.returnValue(of(mockData));

    service.orderedproducts(mockData).subscribe(data => {
      expect(data).toEqual(mockData);
    });

    expect(httpClientSpy.post.calls.count()).toBe(1, 'http.post called once');
    expect(httpClientSpy.post.calls.argsFor(0)).toEqual([expectedUrl, mockData], 'correct URL and data passed to http.post');
  });
});