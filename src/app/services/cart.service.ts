import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:any=[];
public productList=new BehaviorSubject<any>([]) 
constructor() { }
getProducts(){
  return this.productList.asObservable();
}
addtocart(product:any)
{
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList)
  this.getTotalPrice()
  console.log(this.cartItemList)
}
getTotalPrice():number
{
  let alltotal=0;
  this.cartItemList.map((a:any)=>{alltotal=alltotal+a.total})
  return alltotal;
}

removeitemcart(product:any)
{
this.cartItemList.map((a:any,index:any)=>{
  if(product.id===a.id)
  {
    this.cartItemList.splice(index,1);
  }
  this.productList.next(this.cartItemList)
})
}
removeallcart()
{
  this.cartItemList=[]
  this.productList.next(this.cartItemList)
}
}