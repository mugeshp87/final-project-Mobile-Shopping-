import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@ Injectable({
  providedIn: 'root'
})
export class AuthguardService{
  
  logged:boolean=false;

  constructor(public router:Router) { }
  

}

