import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
logout()
{
  alert("Logged Out Successfully");
  this.route.navigate(["/home"])
}
}
