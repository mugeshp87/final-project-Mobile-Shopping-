/* tslint:disable:no-unused-variable */

import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AdminserviceService } from './adminservice.service';

describe('Service: Adminservice', () => {
  let service: AdminserviceService;
  let data: any;
  let http: HttpClient;
  let newdata: any;
  let id: any;
  let id1: number;
  let url = 'http://localhost:3000/Mobile';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminserviceService, HttpClient, HttpHandler],
    });
  });

  it('should ...', inject(
    [AdminserviceService],
    (service: AdminserviceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
describe('addadminproducts()', () => {
  let httpClientSpy: { post: jasmine.Spy };
  let service: AdminserviceService;
  let router: Router;
  beforeEach(() => {
    // Create a spy for the HttpClient post method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    // Create a new instance of YourService using the HttpClient spy
    service = new AdminserviceService(httpClientSpy as any, router);
  });

  it('should call the http.post method with the correct URL and data', () => {
    const mockData = { name: 'Test Product', price: 10 };
    const expectedUrl = 'http://example.com/admin/products';
    httpClientSpy.post.and.returnValue(of(mockData));

    service.addadminproducts(mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    expect(httpClientSpy.post.calls.count()).toBe(1, 'http.post called once');
    expect(httpClientSpy.post.calls.argsFor(0)).toEqual(
      [expectedUrl, mockData],
      'correct URL and data passed to http.post'
    );
  });
});
describe('deleteadminproducts()', () => {
  let httpClientSpy: { delete: jasmine.Spy };
  let service: AdminserviceService;
  let router: Router;

  beforeEach(() => {
    // Create a spy for the HttpClient delete method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete']);

    // Create a new instance of YourService using the HttpClient spy
    service = new AdminserviceService(httpClientSpy as any, router);
  });

  it('should call the http.delete method with the correct URL', () => {
    const mockProductId = 123;
    const expectedUrl = 'http://localhost:3000/Mobile';
    httpClientSpy.delete.and.returnValue(of(null));

    service.deleteadminproducts(mockProductId).subscribe(() => {
      expect().nothing(); // Ensure the subscription is called
    });

    expect(httpClientSpy.delete.calls.count()).toBe(
      1,
      'http.delete called once'
    );
    expect(httpClientSpy.delete.calls.argsFor(0)).toEqual(
      [expectedUrl],
      'correct URL passed to http.delete'
    );
  });
});
describe('updateadminproducts()', () => {
  let httpClientSpy: { put: jasmine.Spy };
  let service: AdminserviceService;
  let router: Router;

  beforeEach(() => {
    // Create a spy for the HttpClient put method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);

    // Create a new instance of YourService using the HttpClient spy
    service = new AdminserviceService(httpClientSpy as any, router);
  });

  it('should call the http.put method with the correct URL and data', () => {
    const mockProductId = 123;
    const mockData = { name: 'Updated Product', price: 20 };
    const expectedUrl = 'http://localhost:3000/Mobile';
    httpClientSpy.put.and.returnValue(of(null));

    service.updateadminproducts(mockProductId, mockData).subscribe(() => {
      expect().nothing(); // Ensure the subscription is called
    });

    expect(httpClientSpy.put.calls.count()).toBe(1, 'http.put called once');
    expect(httpClientSpy.put.calls.argsFor(0)).toEqual(
      [expectedUrl, mockData],
      'correct URL and data passed to http.put'
    );
  });
});
describe('editproduct()', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let routerSpy: { navigate: jasmine.Spy };
  let service: AdminserviceService;

  beforeEach(() => {
    // Create a spy for the HttpClient get method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    // Create a spy for the Router navigate method
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    // Create a new instance of YourService using the HttpClient and Router spies
    service = new AdminserviceService(httpClientSpy as any, routerSpy as any);
  });

  it('should call the router.navigate method with the correct URL and call http.get with the correct URL', () => {
    const mockProductId = 123;
    const expectedUrl = 'http://example.com/products/123';
    httpClientSpy.get.and.returnValue(of(null));

    service.editproduct(mockProductId);

    expect(routerSpy.navigate.calls.count()).toBe(
      1,
      'router.navigate called once'
    );
    expect(routerSpy.navigate.calls.argsFor(0)).toEqual(
      [['/update']],
      'router.navigate called with correct URL'
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'http.get called once');
    expect(httpClientSpy.get.calls.argsFor(0)).toEqual(
      [expectedUrl],
      'correct URL passed to http.get'
    );
  });
});
describe('updateproduct()', () => {
  let httpClientSpy: { put: jasmine.Spy };
  let service: AdminserviceService;
  let router: Router;

  beforeEach(() => {
    // Create a spy for the HttpClient put method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);

    // Create a new instance of YourService using the HttpClient spy
    service = new AdminserviceService(httpClientSpy as any, router);
  });

  it('should call http.put with the correct URL and data', () => {
    const mockProductId = 123;
    const mockProductData = { name: 'updated product', price: 10.99 };
    const expectedUrl = 'http://example.com/products/123';
    httpClientSpy.put.and.returnValue(of(null));

    service.updateproduct(mockProductData, mockProductId);

    expect(httpClientSpy.put.calls.count()).toBe(1, 'http.put called once');
    expect(httpClientSpy.put.calls.argsFor(0)).toEqual(
      [expectedUrl, mockProductData],
      'correct URL and data passed to http.put'
    );
  });
});
describe('deleteproduct()', () => {
  let httpClientSpy: { delete: jasmine.Spy };
  let service: AdminserviceService;
  let router:Router;

  beforeEach(() => {
    // Create a spy for the HttpClient delete method
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['delete']);

    // Create a new instance of YourService using the HttpClient spy
    service = new AdminserviceService(httpClientSpy as any,router);
  });

  it('should call http.delete with the correct URL', () => {
    const mockProductId = 123;
    const expectedUrl = 'http://example.com/products/123';
    httpClientSpy.delete.and.returnValue(of(null));

    service.deleteproduct(mockProductId);

    expect(httpClientSpy.delete.calls.count()).toBe(1, 'http.delete called once');
    expect(httpClientSpy.delete.calls.argsFor(0)).toEqual([expectedUrl], 'correct URL passed to http.delete');
  });
});

