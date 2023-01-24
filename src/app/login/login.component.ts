import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup/signup.service';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { AuthguardService } from '../authguard.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private ser:SignupService,private router:Router,private http:HttpClient,private auth:AuthguardService,private toastr:ToastrService,) { }

  ngOnInit() {
  }

  login=new Login("mugeshp","Rajmugeshp@8")




Onlogin(use:NgForm){
  if(use.value.username==="admin"&&use.value.password=="Admin@123")
  {
    this.auth.logged=true;
    this.toastr.success("Login Success",use.value.username)
    localStorage.setItem("LoggedInAdmin","admin")
    use.reset();
    this.router.navigate(['admin/home'])
  }
  else
   this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
    const consumer=res.find((data:any)=>{
      return data.Username===use.value.username&&data.Password===use.value.password;})
    if(consumer){
      this.auth.logged=true;
      localStorage.setItem('LoggedInUser',use.value.username)
      this.toastr.success("Login Success","",{'positionClass':'toast-top-right'})
      use.reset();
      this.router.navigate(['home'])
    }
   else
   {
      this.toastr.error("user not found")
    }
  })

}

}
