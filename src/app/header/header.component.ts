import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ResolveEnd, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalitem:number=0;
  hideuserurl: boolean=false;
  hideadminurl:boolean=false;
  user!:string;
  constructor(private cart:CartService,public route:Router) {
   }
  ngOnInit() {
this.cart.getProducts().subscribe(res=>{
  this.totalitem=res.length;
}
)
this.route.events.subscribe((routerData:any)=>
{

if (routerData instanceof ResolveEnd) {
  
  if(localStorage.getItem("LoggedInUser")==null && (routerData.url=="/home"||routerData.url=="/products"||routerData.url=="/Signup")){

    this.hideuserurl=true;
  }
  else{
    this.hideuserurl=false;
  }
 }
  })
}
logout() {
  this.route.navigate(['/home']);
  localStorage.clear();
  this.hideuserurl=true;
 }
}
