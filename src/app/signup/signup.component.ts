import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  
  constructor(private fb:FormBuilder,private signservice:SignupService) { }

  ngOnInit() {
  //   this.signupform=new FormGroup({
  //     'Username':new FormControl(),
  //     'Email':new FormControl(),'Password':new FormControl()})
  // } 
  // let users=new FormArray([new FormControl('name'),
  // new FormControl('lastname')])
  // console.log(users)
  // console.log(users.value)


  this.signupform=this.fb.group({
  'Username':new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),   
   'Email':new FormControl('',Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
   'Password':new FormControl('',Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")),
  //  'users':new FormArray([new FormControl(''),
  //  new FormControl('')
  //  ])
  // 'users':this.fb.group({
  //   'name':new FormControl('mugesh'),
  //   'age':new FormControl('14')
  // })

})
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
  registerusers(){
  this.signservice.addusers(this.signupform.value).subscribe();
//  console.log(this.signupform.get("Password")?.value)

// console.log(this.signupform.get('Username')?.valueChanges.subscribe(data=>{
//   console.log(data)
// }))

} 
resetform()
{
  this.signupform.reset(

  )
}
}