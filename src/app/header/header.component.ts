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
// public navbar='true';
  hideuserurl: boolean=false;
  user!:string;
  constructor(private cart:CartService,private route:Router) {
  
   }

  ngOnInit() {
this.cart.getProducts().subscribe(res=>{
  this.totalitem=res.length;
}
)
  
  // if(routerData.url)
//   console.log(routerData.url)
//   if(localStorage.getItem("LoggedInUser")&&routerData.url=='home')
// {
//   this.navbar='false';
//   console.log( localStorage.getItem("LoggedInUser"))
// console.log(routerData.url.includes("home"))
// }
// else{
// this.navbar='true';
// }
this.route.events.subscribe((routerData:any)=>
{
if (routerData instanceof ResolveEnd) {

  console.log( localStorage.getItem("LoggedInUser"))
  console.log(localStorage.getItem("LoggedInUser")==null)

  if(localStorage.getItem("LoggedInUser")==null && (routerData.url=="/home")){

    this.hideuserurl=true;
    console.log( localStorage.getItem("LoggedInUser"))
  }
  else{
    this.hideuserurl=false;
  }
  console.log(routerData.url)}

  })

}
logout() {
  this.route.navigate(['/home']);
  localStorage.clear();
  this.hideuserurl=true;
 }
// isloggedin()
// {
//   if(localStorage.getItem("LoggedInAdmin"))
//  {
//     this.navbar='true'

// }
// else{
//   this.navbar='false';
// }
// }
}
