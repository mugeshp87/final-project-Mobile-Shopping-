import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RolebasedAuthGuard implements CanActivate {
  constructor(private service:RoleService)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.service.isadmin();
  }
  
}
