import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  admin:any
  decodeadmin:any

constructor(public route:Router,private toastr:ToastrService) { }
isadmin() {
  this.admin = localStorage.getItem('LoggedInUser');
  if (this.admin != null) {
    this.decodeadmin = jwt_decode(this.admin);
    if (this.admin.role === 'Admin') {
      this.route.navigate(['admin/home']);
    } else {
      this.toastr.warning(
        'Unauthorized!You are not allowed to navigate this page'
      );
      this.route.navigate(['/home'])
    }
  } else {
    this.toastr.warning('Log in first');
  }
}
}
