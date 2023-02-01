import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService implements OnInit {
  navbar = false;
  constructor() {}
  ngOnInit(): void {}
  loggedin() {
    const user = localStorage.getItem('LoggedInUser');
    if (user) {
      this.navbar = true;
    } else {
      this.navbar = false;
    }
  }
}
