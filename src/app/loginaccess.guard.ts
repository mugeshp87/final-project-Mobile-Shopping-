import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginaccessGuard implements CanActivate {
  constructor(private toastr:ToastrService)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user=localStorage.getItem("LoggedInUser")
    let admin=localStorage.getItem("LoggedInUser")
    if(user||admin)
    {
      this.toastr.warning("you are already logged in")
      return false;
    }
    else{
    return true;
  }
}
}
