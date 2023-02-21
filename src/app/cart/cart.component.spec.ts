/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { products } from '../interfaces';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let item: any;
  let data: products;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        HttpClient,HttpHandler
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('', () => {
    component.removeitemcart(item);
  });
  it('', () => {
    component.deletecart();
  });
  it('', () => {
    component.success(data);
  });
  it('',()=>{
    spyOn(component,'ngOnInit')
    component.ngOnChanges();
    expect(component.ngOnChanges).toHaveBeenCalled()
  }) 
});
