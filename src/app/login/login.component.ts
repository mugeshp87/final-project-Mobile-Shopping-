import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted=false;
select='any';
  constructor() { }

  ngOnInit() {
  }

  login=new Login("muge","hello")

  Onsubmit(use:NgForm)
  {
console.log(use.value)
}
resetform(rform:NgForm)
{
  rform.reset()
}
setvalues(setvalue:NgForm)
{
  let logindetails={
    username:'diwahar',
    password:'Diwa',
    select:'3'
  }
setvalue.setValue(logindetails)
}
}
