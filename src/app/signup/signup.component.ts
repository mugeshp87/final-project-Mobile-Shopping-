import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  users: any;
  constructor(
    private fb: FormBuilder,
    private signservice: SignupService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.signupform = this.fb.group({
      Username: new FormControl('mugeshp', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.pattern('[a-z]{4,8}'),
      ]),
      Email: new FormControl('muge9@gmail.com', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
      ]),
      Password: new FormControl('Rajmugeshp@8', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(5),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
        ),
      ]),
    });
  }


  registerusers() {
    this.signservice.addusers(this.signupform.value).subscribe((res) => {
     this.signupform.reset();
      const sign = require('jwt-encode');
      const secret = 'User@';
      const data = {
        Username: this.signupform.value,
        role: 'User',
        
      };
      const jwt = sign(data, secret);
      localStorage.setItem('LoggedInUser', jwt);
      this.toastr.success("User Registered Successfully")
      this.router.navigate(['login']);
    });
  }
  resetform() {
    this.signupform.reset();
  }
}
