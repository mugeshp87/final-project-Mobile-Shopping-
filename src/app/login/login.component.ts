import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup/signup.service';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted=false;
select='any';
  form: any;
 public loginform!:NgForm
  constructor(private ser:SignupService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  login=new Login("muge","hello")



//   Onsubmit(use:NgForm)
//   {
// console.log(use.value)
// }

Onlogin(){
  this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
    const consumer=res.find((data:any)=>{
      return data.Username===this.loginform.value.Username&&data.Password===this.loginform.value.Password;})
    if(consumer){
      alert("Login Success");
      this.loginform.reset();
      this.router.navigate(['home'])
    }
   else
   {
      alert("user not found")
   }
  })

}


}
// resetform(rform:NgForm)
// {
//   rform.reset()
// }
// setvalues(setvalue:NgForm)
// {
//   let logindetails={
//     username:'diwahar',
//     password:'Diwa',
//     select:'3'
//   }
// setvalue.setValue(logindetails)
// }
