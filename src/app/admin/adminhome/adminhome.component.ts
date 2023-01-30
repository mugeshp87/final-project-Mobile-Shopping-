import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
adminnav=false;
  constructor(public route:Router,private toastr:ToastrService,public service:GeneralService) { }
  ngOnInit() {
    this.service.loggedin();
   console.log(localStorage.getItem('LoggedInAdmin'))
  }
  loggedin()
  {
    let admin=localStorage.getItem('LoggedInAdmin')
  if(admin)
  {
    this.adminnav=true;
  }
  else{
    this.adminnav=false;
  }
  }
logout()
{
  this.toastr.success("Logged Out Successfully");
  localStorage.clear();
  this.route.navigate(["/home"]);
}

}
