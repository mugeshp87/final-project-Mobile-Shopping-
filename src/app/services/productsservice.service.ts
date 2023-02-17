import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductsserviceService {
  url = 'http://localhost:3000/Mobile';
  ordersurl='http://localhost:3000/OrderDetails'
  constructor(private http: HttpClient) {}

  getproducts() {
    return this.http.get(`${this.url}`);
  }
  orderedproducts(data:any)
  {
    return this.http.post(`${this.ordersurl}`,data);
  }
}
