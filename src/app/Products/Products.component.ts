import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { ProductsserviceService } from '../services/productsservice.service';
import { products } from '../interfaces';
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
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.product.getproducts().subscribe((data) => {
      this.value = data;
      this.value.forEach((a: products) => {
        Object.assign(a, { quantity: 1, total: a.Price });
      });
    });
  }
  itemcart: any = [];
  addtocart(item: any) {
    this.toastr.success('Product Added To The Cart Successfully!!');
    this.cart.addtocart(item);
    console.log(item);
    let cartitems = localStorage.getItem('CartItems');
    if (cartitems == null) {
      let getstoredata: any = [];
      getstoredata.push(item);
      localStorage.setItem('CartItems', JSON.stringify(getstoredata));
    } else {
      var id = item.id;
      let index: number = -1;
      this.itemcart = JSON.parse(localStorage.getItem('CartItems') as any);
      for (let i = 0; i < this.itemcart.length; i++) {
        if (parseInt(id) === parseInt(this.itemcart[i].id)) {
          this.itemcart[i].qnt = item.quantity;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemcart.push(item);
        localStorage.setItem('CartItems', JSON.stringify(this.itemcart));
      } else {
        localStorage.setItem('CartItems', JSON.stringify(this.itemcart));
      }
    }
  }
  increaseproduct(mobile: any) {
    console.log(mobile);
    if (mobile.quantity >= 1) {
      mobile.quantity++;
    }
    if (mobile.quantity > 5) {
      this.toastr.info('You Can Add Upto 5 Units Only');
      mobile.quantity = 5;
    }
    this.cart.getTotalPrice();
  }

  decreaseproduct(mobile: any) {
    if (mobile.quantity > 1) mobile.quantity--;
    else {
      this.toastr.info('Minium Quantity Should Be One');
      mobile.quantity = 1;
    }
    this.cart.getTotalPrice();
  }
  getneo() {
    this.product.getproducts().subscribe((res: any) => {
      this.value = res.filter((neo: { Name: String }) => {
        console.log('heyyy');
        return neo.Name.includes('Neo');
      });
      this.value.forEach((a: products) => {
        Object.assign(a, { quantity: 1, total: a.Price });
      });
    });
  }
  geteleven() {
    this.product.getproducts().subscribe(
      (res: any) => {
        this.value = res.filter((eleven: { Name: String }) => {
          return eleven.Name.includes('11');
        });
        this.value.forEach((a: products) => {
          Object.assign(a, { quantity: 1, total: a.Price });
        });
      },
      (error) => {
        this.toastr.error('Error Occurs');
      }
    );
  }
  getzseries() {
    this.product.getproducts().subscribe(
      (res: any) => {
        this.value = res.filter((zseries: { Name: String }) => {
          return zseries.Name.includes('Z');
        });
      },
      (error) => {
        this.toastr.error('Error Occurs');
      }
    );
    this.value.forEach((a: products) => {
      Object.assign(a, { quantity: 1, total: a.Price });
    });
  }
  getnineseries() {
    this.product.getproducts().subscribe(
      (res: any) => {
        this.value = res.filter((nine: { Name: String }) => {
          return nine.Name.includes('9');
        });
      },
      (error) => {
        this.toastr.error('Error Occurs');
      }
    );
    this.value.forEach((a: products) => {
      Object.assign(a, { quantity: 1, total: a.Price });
    });
  }
}
