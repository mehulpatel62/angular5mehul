import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm:FormGroup;
  public Userdata:any = {};
  public UserdataValidation:any = {};
  submitted:Boolean = false;
  constructor(private  formBuilder: FormBuilder) { }
  

  ngOnInit() {
    
  	this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      username: ['', [Validators.required, ageRangeValidator]],
      cpassword: ['', [passwordMatch(this.Userdata, this.Userdata)]]
    });
  }
  

  get f() {  return  this.registerForm.controls; }

  signUp(a,b){
  	this.submitted = true;
  	this.f
    if (this.registerForm.invalid) {
      return;
    }
  }

}

export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && (isNaN(control.value) || control.value.length < 6 || control.value.length > 12)) {
        return { 'ageRange': true };
    }
    return null;
}

function passwordMatch(pass: any, repass: any): Validators {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
debugger;
        if (control.value === undefined  || control.value !== pass.password) {
            return { 'passMatch': true };
        }
        return null;
    };
}


