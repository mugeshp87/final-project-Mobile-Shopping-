import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RoleService } from './services/role.service';

@Injectable({
  providedIn: 'root',
})
export class RolebasedGuard implements CanActivate {
  constructor(private toastr: ToastrService,public service:RoleService) {}
  canActivate(
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      const ls=localStorage.getItem('LoggedInUser')||localStorage.getItem('LoggedInAdmin')
   if(ls!==null)
   {
    this.service.isadmin();
    return true;
   }
   else{
    return false
   }
      
  }
}
