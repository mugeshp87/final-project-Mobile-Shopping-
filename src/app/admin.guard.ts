import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private toastr: ToastrService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const admin = localStorage.getItem('LoggedInAdmin');
    if (admin != null) {
      return true;
    } else {
      this.toastr.warning(
        'You need to login to proceed,Kindly go and login!!!!'
      );
      this.router.navigate(['/home'])
      return false;
    }
  }
}
