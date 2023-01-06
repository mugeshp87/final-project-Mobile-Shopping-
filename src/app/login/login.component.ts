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
  login=new Login("mugesh","hello")

  Onsubmit(use:NgForm)
  {
console.log(use.value)

}
}
