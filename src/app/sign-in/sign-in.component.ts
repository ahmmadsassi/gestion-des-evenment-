import { AuthService } from './../auth.service';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Component, OnInit } from '@angular/core';
import { user } from 'src/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService : AuthService,public router: Router) { }
  submitted = false;
    errorMessage = '';
    isLoggedin = false;
    isLoginFailed = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
  });


}
onSubmit(){
  this.submitted = true;
  this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
      data=>{
          this.isLoggedin = true
          this.router.navigate(['/events']);
      },
      error=>{
          console.log(error);
          this.errorMessage = error;
          this.isLoggedin = false;
          this.isLoginFailed = true;
      }
  );
}
}
