/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { ProductsserviceService } from './productsservice.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('orderedproducts()', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let service: ProductsserviceService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);

    service = new ProductsserviceService(httpClientSpy as any);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the http.post method with the correct URL and data', () => {
    const mockData = { productId: 123, quantity: 2 };
    const expectedUrl = 'http://localhost:3000/OrderDetails';
    httpClientSpy.post.and.returnValue(of(mockData));

    service.orderedproducts(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    expect(httpClientSpy.post.calls.count()).toBe(1, 'http.post called once');
    expect(httpClientSpy.post.calls.argsFor(0)).toEqual(
      [expectedUrl, mockData],
      'correct URL and data passed to http.post'
    );
  });
});
describe('getproducts()', () => {
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

  it('should return an Observable of products', () => {
    const expectedProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];

    service.getproducts().subscribe(
      (products) => {
        expect(products).toEqual(expectedProducts);
      },
      (error) => {
        fail('should not return an error');
      }
    );

    const req = httpTestingController.expectOne(`${service.url}`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedProducts);
  });

  it('should handle http errors', () => {
    const errorMessage =
      'Http failure response for /api/products: 404 Not Found';

    service.getproducts().subscribe(
      (products) => {
        fail('should return an error');
      },
      (error) => {
        expect(error.message).toEqual(errorMessage);
      }
    );

    const req = httpTestingController.expectOne(`${service.url}`);
    expect(req.request.method).toEqual('GET');

    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});
