import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  constructor(private fb: FormBuilder) {
      
  }

  ngOnInit(): void {
    console.log('login ehsan');
  }
  
  get f() {
    return this.loginForm.controls;
  }
}
