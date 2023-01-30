import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {} from ''

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(public router:Router){

  }
}
