import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 loginForm:FormGroup;
  public Userdata:any = {};
 submitted:Boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get f() {  return  this.loginForm.controls; }
  signIn(data){
  	debugger;
  	this.submitted = true;
  	this.f.email
    if (this.loginForm.invalid) {
      return;
    }

  }

}
