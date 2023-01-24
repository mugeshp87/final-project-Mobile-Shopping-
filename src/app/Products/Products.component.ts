import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsserviceService } from '../services/productsservice.service';
@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {
  public val:any;
  constructor(private product:ProductsserviceService,private cart:CartService) { }

  ngOnInit() {
  this.product.getproducts().subscribe(data=>{
    this.val=data;
    this.val.forEach((a:any)=>{Object.assign(a,{quantity:1,total:a.Price})})
  })

  }
  addtocart(item:any)
  {
    this.cart.addtocart(item);
  }
}
