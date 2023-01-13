import { Component, OnInit } from '@angular/core';
import { ProductsserviceService } from '../services/productsservice.service';
@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {
  val:any
  constructor(private product:ProductsserviceService) { }

  ngOnInit() {
  this.product.getproducts().subscribe(data=>{
    this.val=data;
  })
  
  }
}
