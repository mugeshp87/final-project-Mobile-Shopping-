import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
 admin:any
 admindecode:any
 user:any
 userdecode:any
  constructor(private toastr:ToastrService) {
   }
   
isadmin()
{
 this.admin=localStorage.getItem('LoggedInAdmin')
 console.log("yes bro")
  this.admindecode=jwt_decode(this.admin)
  if(this.admindecode.role=="Admin")
{
  console.log("yesyeysy")
  return true
}
else{
  console.log("noonon")
  this.toastr.warning('You Are Not Allowed TO Visit This Page')
  return false;
  
}

}

}
