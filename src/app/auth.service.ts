import { Injectable } from '@angular/core';
import { user } from 'src/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endPoint ='http://localhost:8080';

  public loggedUser:string;
  public isloggedIn: Boolean = false;
  public roles:string[];

  constructor(
    public router :Router,private httpClient: HttpClient
  ) { }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getalluser(): Observable<user> {
    return this.httpClient
      .get<user>(this.endPoint + '/api/user')
      .pipe(retry(1), catchError(this.httpError));
  }

  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/signin']);
  }
  SignIn(user :user,users :user []):Boolean{
    let validUser: Boolean = false;
    users.forEach((curUser) => {
      console.log(curUser.username);
      console.log(user.username)
      if(user.username ===curUser.username && user.password===curUser.password) {
        console.log('aaaaaaaaaa')
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });

     return validUser;
  }
  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);

  }
  httpError(error: { error: { message: string }; status: any; message: any }) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}

