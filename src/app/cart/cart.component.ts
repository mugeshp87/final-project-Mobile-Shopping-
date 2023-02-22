import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { products } from '../interfaces';
import jwt_decode from 'jwt-decode'
import { ToastrService } from 'ngx-toastr';
import { ProductsserviceService } from '../services/productsservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit , OnChanges{
  public product: any = [];
  public grandtotal: number = 0;
  data: any;
  public decodeuser:any
  public uniquecart: any;
  constructor(
    public cart: CartService,
    public route: Router,
    public toastr: ToastrService,
    private productservice:ProductsserviceService
  ) {}
  ngOnChanges(): void {
   this.ngOnInit(); 
  }
  ngOnInit(){
      this.cart.getProducts().subscribe((res) => {
        this.product = res;
        this.grandtotal = this.cart.getTotalPrice();
        this.uniquecart = this.product.filter(
          (item: { id: any }, index: any, self: any[]) => {
            return index === self.findIndex((t: { id: any }) => t.id === item.id);
          }
          
        );
      });
      
    


  }
  removeitemcart(item: any) {
    this.cart.removeitemcart(item);
  }
  deletecart() {
    this.cart.removeallcart();
  }
  success(data: any) {
    const user = localStorage.getItem('LoggedInUser');
    if (user != null) {
      this.decodeuser = jwt_decode(user);
      data.map((element:any)=>{
       element.total=element.quantity*element.Price;
       element.user=this.decodeuser.Username
       delete element.id;
       return element
      })
      this.route.navigate(['success']);
      this.productservice.orderedproducts(data).subscribe();
      setTimeout(() => {
        this.route.navigate(['home']);
        this.cart.removeallcart();
      }, 3000);
    }
  }
  increaseproduct(item: any) {
    if (item.quantity >= 1) {
      item.quantity++;
    }
    if (item.quantity > 5) {
      this.toastr.info('You Can Add Upto 5 Units Only');
      item.quantity = 5;
    }
    this.cart.getTotalPrice();
    this.ngOnInit();
  }

  decreaseproduct(item: any) {
    if (item.quantity > 1) item.quantity--;
    else {
      this.toastr.show('Product Removed From Cart');
      this.cart.removeitemcart(item);
    }
    this.cart.getTotalPrice();
    this.ngOnInit();
  }
}
