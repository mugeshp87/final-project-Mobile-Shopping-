import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup/signup.service';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { AuthguardService } from '../authguard.service';

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
  constructor(private ser:SignupService,private router:Router,private http:HttpClient,private auth:AuthguardService) { }

  ngOnInit() {
  }

  login=new Login("mugeshp","Rajmugeshp@8")



//   Onsubmit(use:NgForm)
//   {
// console.log(this.loginform.value)
// }

Onlogin(use:NgForm){
  this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
    const consumer=res.find((data:any)=>{
      return data.Username===use.value.username&&data.Password===use.value.password;})
    if(consumer){
      this.auth.logged=true;
      alert("Login Success");
      use.reset();
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
