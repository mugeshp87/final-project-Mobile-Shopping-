import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(public route:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }
logout()
{
  this.toastr.success("Logged Out Successfully");
  localStorage.clear();
  this.route.navigate(["/home"]);
}
}
