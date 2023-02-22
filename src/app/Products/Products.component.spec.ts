// /* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './Products.component';
import { ProductsserviceService } from '../services/productsservice.service';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { products } from '../interfaces';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsserviceService;
  let toastrService: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        { provide: ProductsserviceService, useValue: { getproducts: () => of([]) } },
        { provide: CartService, useValue: {} },
        { provide: ToastrService, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsserviceService);
    toastrService = TestBed.inject(ToastrService);
    spyOn(productService, 'getproducts').and.returnValue(of([
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99 }
    ]));
    fixture.detectChanges();
  });

  it('should fetch products and set default quantity and total', () => {
    expect(productService.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([
      { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99, quantity: 1, total: 20.99 }
    ]);
  });
});
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let cartService: CartService;
  let toastrService: ToastrService;
let product:ProductsserviceService
  beforeEach(() => {
    cartService = new CartService();
    toastrService = jasmine.createSpyObj('ToastrService', ['success']);

    component = new ProductsComponent(product,cartService, toastrService);
  });

  it('should add the item to the cart and show success message', () => {
    const item = { id: 1, name: 'Product 1', price: 10.99 };
    component.addtocart(item);

    expect(toastrService.success).toHaveBeenCalledWith('Product Added To The Cart Successfully!!');
    expect(cartService.addtocart).toContain(item);
  });
});
describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductsserviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductsserviceService,
          useValue: {
            getproducts: () => of([{ id: 1, name: 'Product 1', price: 10.99, Name: 'Neo Product' }, { id: 2, name: 'Product 2', price: 15.99, Name: 'Regular Product' }])
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsserviceService);
    fixture.detectChanges();
  });

  it('should fetch Neo products and set default quantity and total', () => {
    expect(productService.getproducts).toHaveBeenCalled();
    expect(component.value).toEqual([{ id: 1, name: 'Product 1', price: 10.99, Name: 'Neo Product', quantity: 1, total: 10.99 }]);
  });
});







// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ProductsComponent } from './Products.component';
// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';
// import { CartService } from '../services/cart.service';
// import { of } from 'rxjs';
// import { ProductsserviceService } from '../services/productsservice.service';
// import { AdminserviceService } from '../services/adminservice.service';

// describe('ProductsComponent', () => {
//   let component: ProductsComponent;
//   let cartService: CartService;
//   let toastrService: ToastrService;
//   let fixture: ComponentFixture<ProductsComponent>;
//   let item: any;
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ProductsComponent],
//       providers: [
//         HttpClient,
//         HttpHandler,
//         {
//           provide: ToastrService,
//           useValue: ToastrService,
//         },
//       ],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//   // it('should call the addtocart method on the CartService with the given item', () => {
//   //   // Arrange

//   //   // Act
//   //   component.addtocart(item);

//   //   // Assert
//   //   expect(cartService.addtocart).toHaveBeenCalledWith(item);
//   // });
//   // it('should display a success message using the Toastr service', () => {
//   //   // Arrange
//   //   spyOn(toastrService, 'success');

//   //   // Act
//   //   component.addtocart(item);

//   //   // Assert
//   //   expect(toastrService.success).toHaveBeenCalledWith('Product Added To The Cart Successfully!!');
//   // });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('', () => {
//     component.addtocart(item);
//   });
// });
// describe('getneo()', () => {
//   let component: ProductsComponent;
//   let product: ProductsserviceService;
//   let cart: CartService;
//   let toastr: ToastrService;
//   it('should retrieve products that contain "Neo" in their name and assign quantity and total properties', () => {
//     const mockProduct = {
//       getproducts: () =>
//         of([
//           { Name: 'NeoAir mattress', Price: 100 },
//           { Name: 'Camping stove', Price: 50 },
//           { Name: 'Hiking boots', Price: 80 },
//           { Name: 'NeoShell jacket', Price: 150 },
//         ]),
//     };
//     const getProductsSpy = spyOn(mockProduct, 'getproducts').and.callThrough();
//     const component = new ProductsComponent(product, cart, toastr);

//     component.getneo();

//     expect(getProductsSpy).toHaveBeenCalled();
//     expect(component.value).toEqual([
//       { Name: 'NeoAir mattress', Price: 100, quantity: 1, total: 100 },
//       { Name: 'NeoShell jacket', Price: 150, quantity: 1, total: 150 },
//     ]);
//   });

//   it('should retrieve products that contain "Neo" in their name and assign quantity and total properties', () => {
//     const mockProduct = {
//       getproducts: () =>
//         of([
//           { Name: 'NeoAir mattress', Price: 100 },
//           { Name: 'Camping stove', Price: 50 },
//           { Name: 'Hiking boots', Price: 80 },
//           { Name: 'NeoShell jacket', Price: 150 },
//         ]),
//     };
//     const getProductsSpy = spyOn(mockProduct, 'getproducts').and.callThrough();
//     const component = new ProductsComponent(product, cart, toastr);

//     component.getneo();

//     expect(getProductsSpy).toHaveBeenCalled();
//     expect(component.value).toEqual([
//       { Name: 'NeoAir mattress', Price: 100, quantity: 1, total: 100 },
//       { Name: 'NeoShell jacket', Price: 150, quantity: 1, total: 150 },
//     ]);
//     component.value.forEach(
//       (product: { quantity: any; total: any; Price: any }) => {
//         expect(product.quantity).toBe(1);
//         expect(product.total).toBe(product.Price);
//       }
//     );
//   });
// });

// describe('ProductComponent', () => {
//   let component: ProductsComponent;
//   let fixture: ComponentFixture<ProductsComponent>;
//   let adminServiceSpy: jasmine.SpyObj<AdminserviceService>;

//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('AdminserviceService', ['getproducts']);

//     await TestBed.configureTestingModule({
//       declarations: [ProductsComponent],
//       providers: [{ provide: AdminserviceService, useValue: spy }],
//     }).compileComponents();

//     adminServiceSpy = TestBed.inject(
//       AdminserviceService
//     ) as jasmine.SpyObj<AdminserviceService>;
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//   });

//   it('should fetch products and set default quantity and total', () => {
//     const products: any = [{ id: 1, name: 'Product 1', price: 10.99 }];
//     adminServiceSpy.getadminproducts.and.returnValue(of(products));
//     component.ngOnInit();
//     expect(adminServiceSpy.getadminproducts).toHaveBeenCalled();
//     expect(component.value).toEqual(
//       products.map((p: { price: any }) => ({
//         ...p,
//         quantity: 1,
//         total: p.price,
//       }))
//     );
//   });
// });
// describe('HeaderComponent', () => {
//   let component: ProductsComponent;
//   let fixture: ComponentFixture<ProductsComponent>;
//   let adminService: AdminserviceService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ProductsComponent],
//       providers: [AdminserviceService],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     adminService = TestBed.inject(AdminserviceService);
//   });

//   it('should assign default quantity and total to each product', () => {
//     const mockProducts :any= [
//       { id: 1, name: 'Product 1', price: 10.99 },
//       { id: 2, name: 'Product 2', price: 15.99 },
//       { id: 3, name: 'Product 3', price: 20.99 },
//     ];
//     spyOn(adminService, 'getadminproducts').and.returnValue(of(mockProducts));
//     component.ngOnInit();
//     expect(adminService.getadminproducts).toHaveBeenCalled();
//     expect(component.value).toEqual([
//       { id: 1, name: 'Product 1', price: 10.99, quantity: 1, total: 10.99 },
//       { id: 2, name: 'Product 2', price: 15.99, quantity: 1, total: 15.99 },
//       { id: 3, name: 'Product 3', price: 20.99, quantity: 1, total: 20.99 },
//     ]);
//   });
// });
