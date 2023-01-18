import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product:any=[];
public grandtotal:number=0;
  constructor(private cart:CartService) {
   }

  ngOnInit() {
    this.cart.getProducts().subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cart.getTotalPrice();
    })
  }
  removeitemcart(item:any){
    this.cart.removeitemcart(item)
  }
  deletecart()
  {
    this.cart.removeallcart();
  }

}
