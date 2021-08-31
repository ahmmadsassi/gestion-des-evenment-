import { AuthService } from './../auth.service';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';


import { Component, OnInit } from '@angular/core';
import { user } from 'src/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

 user = new user();
 public users : any = [];
 erreur =0;

  constructor(private AuthService : AuthService,public router: Router) { }

  ngOnInit(): void {
    this.fetchalluserss();
}

  fetchalluserss() {
    this.AuthService.getalluser().subscribe((data:{}) => {
      this.users = data;

    })

  }

onsignin(){

let isValidUser: Boolean = this.AuthService.SignIn(this.user,this.users);
    console.log("valid user "+isValidUser);
    if (isValidUser)
    {
      console.log("isadmin "+this.AuthService.isAdmin());
      this.router.navigate(['/events']);
    }
      else
        this.erreur = 1;
}
}
