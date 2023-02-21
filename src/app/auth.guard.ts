import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthguardService,
    public toastr: ToastrService
  ) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const user=localStorage.getItem('LoggedInUser')
      if(user!=null){
        return true;
      }
      else{
        this.toastr.warning(
          'You need to login to proceed,Kindly go and login!!!!'
        )
        return false;
        }
  }
}
