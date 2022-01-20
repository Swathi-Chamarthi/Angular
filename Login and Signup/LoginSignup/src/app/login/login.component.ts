import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm=new FormGroup({
  uemail:new FormControl("",[Validators.required,Validators.minLength(8),Validators.email]),
  upass:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9-_@]*')]),
  uconpass:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9-_@]*')])
  })
  
  get uemail(){
    return this.loginForm.get('uemail')
  }
  
  get upass(){
    return this.loginForm.get('upass')
  }
  
  get uconpass(){
    return this.loginForm.get('uconpass')
  }
  
  login(){
    console.log(this.loginForm.value);
  }
  
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
   
  constructor() { }

  ngOnInit(): void {
  }

}
