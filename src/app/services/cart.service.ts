import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { products } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
  addtocart(product: products) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let alltotal = 0;
    this.cartItemList.map((a: products) => {
      alltotal = alltotal + a.total;
    });
    return alltotal;
  }

  removeitemcart(product: products) {
    this.cartItemList.map((a: products, index: products) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
      this.productList.next(this.cartItemList);
    });
  }
  removeallcart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  updateCartItems(items: number) {
    this.productList.next(items);
}
}
