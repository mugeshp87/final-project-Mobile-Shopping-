import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible!:boolean;

  constructor() { this.visible=false}
  
  hide()
  {
    this.visible=false;
    console.log("hiii")
  }

 show()
 {
  this.visible=true
 }
toggle()
{
  this.visible=!this.visible
}
useful()
{}
}
