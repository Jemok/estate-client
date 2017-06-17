import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {ToasterService} from "angular2-toaster";
import {AuthServiceService} from "../services/auth.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  email: FormControl;

  password: FormControl;

  constructor(public builder: FormBuilder,
              public toasterService: ToasterService,
              public authenticationService : AuthServiceService,
              public router : Router) {}

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required,
    ]);
    this.loginForm = this.builder.group({
      email: this.email,
      password: this.password
    });
  }

  login(loginData) {
    console.log(loginData);
    this.authenticationService.login(loginData).subscribe(data => {
      this.setAuthInfo(data);
    }, error => {
      error.forEach(err => {
        this.toasterService.pop('error', 'Error', err);
      });
    }, () => {
      this.router.navigate(['/dashboard']);
    })
  }

  setAuthInfo(data){
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.token);
  }
}

