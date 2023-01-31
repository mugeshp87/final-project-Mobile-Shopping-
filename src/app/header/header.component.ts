import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ResolveEnd, Router } from '@angular/router';
import { GeneralService } from '../services/general.service';
import { AdminserviceService } from '../services/adminservice.service';
import { NavbarService } from '../services/navbar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalitem: number = 0;
  hideuserurl: boolean = false;
  hidenavbar:boolean=false;
  user!: string;
  constructor(
    private cart: CartService,
    public route: Router,
    public prouduct:AdminserviceService,public nav:NavbarService
  ) {}
  ngOnInit() {
    this.cart.getProducts().subscribe((res) => {
      this.totalitem = res.length;
    });
    // this.route.events.subscribe((routerData: any) => {
    //   if (routerData instanceof ResolveEnd) {
    //     if (
    //       localStorage.getItem('LoggedInUser') == null &&
    //       routerData.url == '/home'
    //     ) {
    //       this.hideuserurl = true;
    //     } else {
    //       this.hideuserurl = false;
    //     }
    //   }
    // });
  }
  // log=()=>{
  //    var admin=localStorage.getItem('LoggedInUser')
  //   console.log("mugesh")
  //    if(admin)
  //    {
  //     console.log("amar")
  //     this.hidenavbar=true;
  //    }
    //  else if(admin!=null)
    //  {
    //   this.hidenavbar=false;
    //  }
    //  else{
    //   console.log("false")
    //   this.hidenavbar=false;
    //  }


  logout() {
    this.route.navigate(['/home']);
    localStorage.clear();
    this.hideuserurl = true;
  }
}
