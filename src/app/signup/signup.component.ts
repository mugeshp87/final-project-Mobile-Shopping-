import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from './signup.service';

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
        Validators.maxLength(15),
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
    // this.signupform.controls['users'].patchValue(["team"]);

    // this.signupform.statusChanges.subscribe(data=>{
    //   console.log(data)
    // })
    // const modeluser={
    //   Username:"",
    //   Email:"muthusri@rhfj",
    //   Password:"ghijfefi"
    // }
    // this.signupform.setValue(modeluser)
    // this.signupform.patchValue(modeluser)
  }
  // get frmarr()
  // {
  //   return this.signupform.controls['users'] as FormArray;
  // }
  // getControls(form:FormGroup,key:string)
  // {
  // return (<FormArray>form.controls[key]).controls
  // }
  registerusers() {
    this.signservice.addusers(this.signupform.value).subscribe((res) => {
      this.toastr.success('Succesfully Registered'), this.signupform.reset();
      this.router.navigate(['login']);
    });
  }
  resetform() {
    this.signupform.reset();
  }
}
