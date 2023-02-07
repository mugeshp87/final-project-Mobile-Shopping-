import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  visible!: boolean;
  constructor() {}
  shownav() {
    if (localStorage.getItem('LoggedInUser')) {
      return (this.visible = true);
    }
    if (localStorage.getItem('LoggedInAdmin')) {
      return (this.visible = false);
    } else if (localStorage != null) {
      return (this.visible = true);
    } else {
      return (this.visible = false);
    }
  }
  showadminnav() {
    if (localStorage.getItem('LoggedInAdmin')) {
      return (this.visible = true);
    } else {
      return (this.visible = false);
    }
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
  toggle() {
    this.visible = !this.visible;
  }
}
