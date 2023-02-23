// /* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './Products.component';
import { ProductsserviceService } from '../services/productsservice.service';
import { CartService } from '../services/cart.service';
import { Overlay, ToastrService, ToastToken } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { products } from '../interfaces';
import { Injector, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsserviceService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductsserviceService,
          useValue: { getproducts: () => of([]) },
        },
        { provide: CartService, useValue: {} },
        { provide: ToastrService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsserviceService);
    toastrService = TestBed.inject(ToastrService);
    spyOn(productService, 'getproducts').and.returnValue(
      of([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
      ])
    );
    fixture.detectChanges();
  });

  it('should fetch products and set default quantity and total', () => {
    expect(productService.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 },
    ]);
  });
});
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let cartService: CartService;
  let toastrService: ToastrService;
  let product: ProductsserviceService;
  let mockProductService: jasmine.SpyObj<ProductsserviceService>;

  beforeEach(() => {
    cartService = new CartService();
    toastrService = jasmine.createSpyObj('ToastrService', ['success']);
    mockProductService = jasmine.createSpyObj('ProductsserviceService', [
      'getproducts',
    ]);
    component = new ProductsComponent(product, cartService, toastrService);
  });

  it('should add the item to the cart and show success message', () => {
    const item = { id: 1, name: 'Product 1', price: 10.99 };
    component.addtocart(item);

    expect(toastrService.success).toHaveBeenCalledWith(
      'Product Added To The Cart Successfully!!'
    );
    expect(cartService.addtocart).toContain(item);
  });
  it('getneo', () => {
    component.getneo();
    expect(product.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 },
    ]);
  });
  it('should get products with name containing "Neo"', () => {
    const mockProducts = [
      { Name: 'NeoProduct1', Price: 10 },
      { Name: 'Product2', Price: 20 },
      { Name: 'NeoProduct3', Price: 30 },
    ];

    mockProductService.getproducts.and.returnValue(of(mockProducts));

    component.getneo();

    expect(component.value.length).toBe(2);
    expect(component.value[0].Name).toContain('Neo');
    expect(component.value[1].Name).toContain('Neo');
  });
  it('should handle errors when calling getproducts()', () => {
    spyOn(product, 'getproducts').and.returnValue(throwError('API error'));
    spyOn(toastrService, 'error');

    component.getneo();

    expect(product.getproducts).toHaveBeenCalled();
    expect(toastrService.error).toHaveBeenCalledWith('Error Occurs');
  });
  it('geteleven', () => {
    component.geteleven();
    expect(product.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 },
    ]);
  });
  it('should filter products containing "11"', () => {
    const mockProducts = [
      { Name: 'Product 1', Price: 10 },
      { Name: 'Product 2', Price: 11 },
      { Name: 'Product 3', Price: 12 },
    ];
    spyOn(product, 'getproducts').and.returnValue(of(mockProducts));
    spyOn(toastrService, 'error');
    component.geteleven();
    expect(component.value.length).toBe(1);
    expect(component.value[0].Name).toBe('Product 2');
    expect(component.value[0].Price).toBe(11);
    expect(toastrService.error).not.toHaveBeenCalled();
  });

  it('should handle error when getting products', () => {
    spyOn(product, 'getproducts').and.returnValue(throwError('error'));
    spyOn(toastrService, 'error');
    component.geteleven();
    expect(component.value).toBeUndefined();
    expect(toastrService.error).toHaveBeenCalledWith('Error Occurs');
  });

  it('getzseries', () => {
    component.getzseries();
    expect(product.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 },
    ]);
  });

  it('getnineseries', () => {
    component.getnineseries();
    expect(product.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 },
    ]);
  });
  it('should handle errors when calling getproducts()', () => {
    spyOn(product, 'getproducts').and.returnValue(throwError('API error'));
    spyOn(toastrService, 'error');

    component.getnineseries();

    expect(product.getproducts).toHaveBeenCalled();
    expect(toastrService.error).toHaveBeenCalledWith('Error Occurs');
  });
});

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsserviceService;
  let cartService: CartService;
  let toastrService: ToastrService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsComponent],
      providers: [ProductsserviceService, CartService, ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsserviceService);
    cartService = TestBed.inject(CartService);
    toastrService = TestBed.inject(ToastrService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('geteleven', () => {
    it('should filter products with "11" in the name and assign quantity and total', () => {
      const mockProducts: any = [
        { Name: 'Product 11', Price: 10 },
        { Name: 'Product 22', Price: 20 },
      ];

      spyOn(toastrService, 'error');
      component.geteleven();
      const req = httpMock.expectOne(`${productService.url}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockProducts);

      expect(component.value.length).toBe(1);
      expect(component.value[0].Name).toBe('Product 11');
      expect(component.value[0].quantity).toBe(1);
      expect(component.value[0].total).toBe(10);

      expect(toastrService.error).not.toHaveBeenCalled();
    });

    it('should handle error scenario', () => {
      spyOn(toastrService, 'error');
      component.geteleven();
      const req = httpMock.expectOne(`${productService.url}`);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Network error'));

      expect(component.value).toBeUndefined();
      expect(toastrService.error).toHaveBeenCalled();
    });
  });
});
describe('MyComponent', () => {
  let component: ProductsComponent;
  let productService: any;
  let cartService: any;
  let toastrService: any;

  beforeEach(() => {
    // Create a spy object for ProductService
    productService = jasmine.createSpyObj('ProductService', ['getproducts']);
    // Create a spy object for ToastrService
    toastrService = jasmine.createSpyObj('ToastrService', ['success']);

    component = new ProductsComponent(
      productService,
      cartService,
      toastrService
    );
  });

  it('should filter products with "Z" in name', () => {
    // Mock the response from ProductService
    const mockResponse = [
      { Name: 'ZSeries', Price: 100 },
      { Name: 'XSeries', Price: 200 },
      { Name: 'YSeries', Price: 300 },
      { Name: 'ZBook', Price: 400 },
    ];
    productService.getproducts.and.returnValue(of(mockResponse));

    // Call the method being tested
    component.getzseries();

    // Assert that the value property has been set correctly
    expect(component.value).toEqual([
      { Name: 'ZSeries', Price: 100 },
      { Name: 'ZBook', Price: 400 },
    ]);

    // Assert that the success method of ToastrService has been called
    expect(toastrService.success).toHaveBeenCalledWith(
      'Products with "Z" in name filtered successfully!'
    );
  });
  it('should filter products with "9" in name', () => {
    // Mock the response from ProductService
    const mockResponse = [    { Name: 'X9', Price: 100 },    { Name: 'Y10', Price: 200 },    { Name: 'Z9Plus', Price: 300 },    { Name: 'Z11', Price: 400 },  ];
    productService.getproducts.and.returnValue(of(mockResponse));
  
    // Call the method being tested
    component.getnineseries();
  
    // Assert that the value property has been set correctly
    expect(component.value).toEqual([
      { Name: 'X9', Price: 100 },
      { Name: 'Z9Plus', Price: 300 },
    ]);
    
    // Assert that the success method of ToastrService has been called
    expect(toastrService.success).toHaveBeenCalledWith('Products with "9" in name filtered successfully!');
  });
  it('should filter products with "11" in name', () => {
    // Mock the response from ProductService
    const mockResponse = [
      { Name: 'Product11', Price: 100 },
      { Name: 'Product2', Price: 200 },
      { Name: 'Product311', Price: 300 },
      { Name: 'Product4', Price: 400 },
    ];
    productService.getproducts.and.returnValue(of(mockResponse));

    // Call the method being tested
    component.geteleven();

    // Assert that the value property has been set correctly
    expect(component.value).toEqual([
      { Name: 'Product11', Price: 100 },
      { Name: 'Product311', Price: 300 },
    ]);

    // Assert that the success method of ToastrService has been called
    expect(toastrService.success).toHaveBeenCalledWith('Products with "11" in name filtered successfully!');
  });

  it('should display error message when API call fails', () => {
    spyOn(productService, 'getproducts').and.returnValue(throwError('API Error'));

    component.geteleven();

    expect(toastrService.error).toHaveBeenCalledWith('Error Occurs');
  });
  it('should filter products with "Neo" in name', () => {
    // Mock the response from ProductService
    const mockResponse = [    { Name: 'NeoSmartpen', Price: 100 },    { Name: 'XSeries', Price: 200 },    { Name: 'NeoBook', Price: 300 },    { Name: 'ZBook', Price: 400 },  ];
    productService.getproducts.and.returnValue(of(mockResponse));
  
    // Call the method being tested
    component.getneo();
  
    // Assert that the value property has been set correctly
    expect(component.value).toEqual([
      { Name: 'NeoSmartpen', Price: 100 },
      { Name: 'NeoBook', Price: 300 },
    ]);
  
    // Assert that the success method of ToastrService has been called
    expect(toastrService.success).toHaveBeenCalledWith('Products with "Neo" in name filtered successfully!');
  });
  
});
  
