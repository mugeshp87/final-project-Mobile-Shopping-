import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  navbar=false;
  constructor() { }
loggedin()
{
if(localStorage.getItem("LoggedInAdmin"))
{
  console.log(localstorage.)
  this.navbar=true;
}
else{
  this.navbar=false;
}
}
}
