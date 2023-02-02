import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { ProductsserviceService } from '../services/productsservice.service';
@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],
})
export class ProductsComponent implements OnInit {
  public value: any;
  constructor(
    private product: ProductsserviceService,
    private cart: CartService,
    private toastr:ToastrService
  ) {}

  ngOnInit() {
    this.product.getproducts().subscribe((data) => {
      this.value = data;
      this.value.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.Price });
      });
    });
  }
  addtocart(item: any) {
    this.cart.addtocart(item);
  }
  getneo() {
    this.product.getproducts().subscribe((res: any) => {
      this.value = res.filter((neo: { Name: String }) => {
        return neo.Name.includes('Neo');
      });
    });
  }
  geteleven() {
    this.product.getproducts().subscribe((res: any) => {
      this.value = res.filter((eleven: { Name: String }) => {
        return eleven.Name.includes('11');
      });
    },
    (error) => {
      this.toastr.error('Error Occurs');
    }
    );
  }
  getzseries() {
    this.product.getproducts().subscribe((res: any) => {
      this.value = res.filter((zseries: { Name: String }) => {
        return zseries.Name.includes('Z');
      });
    },(error) => {
      this.toastr.error('Error Occurs');
    }
    );
  }
  getnineseries() {
    this.product.getproducts().subscribe((res: any) => {
      this.value = res.filter((nine: { Name: String }) => {
        return nine.Name.includes('9');
      });
    },
    (error) => {
      this.toastr.error('Error Occurs');
    }
    );
  }
}
