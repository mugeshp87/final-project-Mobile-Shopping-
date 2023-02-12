import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ResolveEnd, Router } from '@angular/router';
import { AdminserviceService } from '../services/adminservice.service';
import { NavbarService } from '../services/navbar.service';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalitem: number = 0;
  hideuserurl: boolean = false;
  hidenavbar: boolean = false;
  user!: string;
  admin: any;
  decodeadmin: any;
  constructor(
    private cart: CartService,
    public route: Router,
    public prouduct: AdminserviceService,
    public nav: NavbarService,
    public toastr: ToastrService
  ) {}
  ngOnInit() {
    this.cart.getProducts().subscribe((res) => {
      this.totalitem = res.length;
    });
  }
  isadmin() {
    this.admin = localStorage.getItem('LoggedInUser');
    if (this.admin != null) {
      this.decodeadmin = jwt_decode(this.admin);
      if (this.admin.role === 'Admin') {
        this.route.navigate(['admin/home']);
      } else {
        this.toastr.warning(
          'Unauthorized!You are not allowed to goo this page'
        );
      }
    } else {
      this.toastr.warning('Log in first');
    }
  }
  logout() {
    this.route.navigate(['/home']);
    localStorage.clear();
    this.hideuserurl = true;
  }
}
