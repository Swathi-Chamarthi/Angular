import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
uemail:new FormControl("",[Validators.required,Validators.minLength(8),Validators.email]),
upass:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9-_@]*')]),
ucheckbox:new FormControl("",[Validators.requiredTrue])
})

get uemail(){
  return this.loginForm.get('uemail')
}

get upass(){
  return this.loginForm.get('upass')
}

get ucheckbox(){
  return this.loginForm.get('ucheckbox')
}

login(){
  console.log(this.loginForm.value);
}

  constructor() { }

  ngOnInit(): void {
  }

}
