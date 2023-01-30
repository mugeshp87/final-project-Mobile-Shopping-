import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService implements OnInit{
  navbar=false;
  constructor() { }
  ngOnInit(): void {
    console.log(localStorage.getItem("LoggedInAdmin"))
 console.log("Hello");
  }
loggedin()
{
  console.log("hi team")
  const user=localStorage.getItem('LoggedInUser')
if(user)
{
  console.log("Admin Logged In!!!")
  this.navbar=true;
}
else{
  this.navbar=false;
}
}
}
