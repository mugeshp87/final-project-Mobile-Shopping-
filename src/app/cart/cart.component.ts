import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { products } from '../interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandtotal: number = 0;
  data: any;
  constructor(private cart: CartService, private route: Router) {}

  ngOnInit() {
    this.cart.getProducts().subscribe((res) => {
      this.product = res;
      this.grandtotal = this.cart.getTotalPrice();
    });
  }
  removeitemcart(item: any) {
    this.cart.removeitemcart(item);
  }
  deletecart() {
    this.cart.removeallcart();
  }
  success(data: any) {
    this.route.navigate(['success']);
    setTimeout(() => {
      this.route.navigate(['home']);
      this.cart.removeallcart();
    }, 3000);
  }
//   increase(item:{quantity:number}) {
//       item.quantity+=1;
// }

//  decrease(item:{quantity:number}) {
//   if(item.quantity!=1)
//     item.quantity-=1;
//    }

increase(item:{quantity:number}) {
  this.cart.updateCartItems(item.quantity+=1)
}

decrease(item:{quantity:number}) {
if(item.quantity!=1)
this.cart.updateCartItems(item.quantity-=1)
}

}