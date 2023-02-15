import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { products } from '../interfaces';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  public product: any = [];
  public grandtotal: number = 0;
  data: any;
  constructor(
    private cart: CartService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.cart.getProducts().subscribe((res) => {
      this.product = res;
      this.grandtotal = this.cart.getTotalPrice();
      // this.ngOnChanges()
    });
  }
  removeitemcart(item: any) {
    this.cart.removeitemcart(item);
  }
  deletecart() {
    this.cart.removeallcart();
  }
  success(data: products) {
    const user = localStorage.getItem('LoggedInUser');
    if (user != null) {
      data.user = user;
      console.log(data);
      this.route.navigate(['success']);
      setTimeout(() => {
        this.route.navigate(['home']);
        this.cart.removeallcart();
      }, 3000);
    }
  }
  increaseproduct(item: any) {
    console.log(item.quantity);
    if (item.quantity >= 1) {
      item.quantity++;
    }
    if (item.quantity > 5) {
      this.toastr.info('You Can Add Upto 5 Units Only');
      item.quantity = 5;
    }
    this.cart.getTotalPrice();
    this.ngOnInit();
    console.log(this.cart.getTotalPrice());
  }

  decreaseproduct(item: any) {
    console.log(item.quantity);
    if (item.quantity > 1) item.quantity--;
    else {
      this.toastr.show('Product Removed From Cart');
      this.cart.removeitemcart(item);
    }
    this.cart.getTotalPrice();
    this.ngOnInit();
    console.log(this.cart.getTotalPrice)

  }
  
}
