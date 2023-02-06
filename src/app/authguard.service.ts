import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  getJWTToken() {
    throw new Error('Method not implemented.');
  }
  logged: boolean = false;
  constructor(public router: Router) {}
}
