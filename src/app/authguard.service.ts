import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@ Injectable({
  providedIn: 'root'
})
export class AuthguardService{
  
  logged:boolean=false;

  constructor(public router:Router) { }
  

}

