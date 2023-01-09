import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform!: FormGroup;
  
  constructor(private fb:FormBuilder) { }

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
   'Email':new FormControl(''),
   'Password':new FormControl(''),
  //  'users':new FormArray([new FormControl(''),
  //  new FormControl('')
  //  ])
  'users':this.fb.group({
    'name':new FormControl('mugesh'),
    'age':new FormControl('14')
  })

})
this.signupform.controls['users'].patchValue(["team"]);

  
this.signupform.statusChanges.subscribe(data=>{
  console.log(data)
})
const modeluser={
  Username:"",
  Email:"muthusri@rhfj",
  Password:"ghijfefi"
}
this.signupform.setValue(modeluser)
// this.signupform.patchValue(modeluser)
  
}
// get frmarr()
// {
//   return this.signupform.controls['users'] as FormArray;
// } 
getControls(form:FormGroup,key:string)
{
return (<FormArray>form.controls[key]).controls
}
  registeruser(){
  console.log(this.signupform?.value)
 console.log(this.signupform.get("Password")?.value)

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