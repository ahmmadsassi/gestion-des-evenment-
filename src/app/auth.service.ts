import { Injectable } from '@angular/core';
import { user } from 'src/models/user.model';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';
const headers = new HttpHeaders().set('Content-Type', 'application/json');
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl ='http://localhost:8080/auth/';

  public loggedUser:string;
  public isloggedIn: Boolean = false;
  public roles:string[];

  constructor(
    public router :Router,private http: HttpClient
  ) { }

  signup(user: user): Observable<any>{
    //console.log('In AuthService');
    return this.http.post(this.baseUrl + 'signup', user, { headers, responseType: 'text'})
                    .pipe(catchError(this.handleError));
  }
  login(user: string, password: string){
    // console.log('In AuthService -  login');
    return this.http.post<any>(this.baseUrl + 'login',
      {userName: user, password:password}, {headers})
      .pipe(catchError(this.handleError),
        map(userData => {
          sessionStorage.setItem("username", user);
          let tokenStr = "Bearer " + userData.token;
          console.log("Token---  " + tokenStr);
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("roles", JSON.stringify(userData.roles));
          return userData;
        })
      );
  }

  logout(){
    sessionStorage.clear()
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean{
    return sessionStorage.getItem('username') !== null;
  }

  private handleError(httpError: HttpErrorResponse) {
    let message:string = '';

    if (httpError.error instanceof ProgressEvent) {
      console.log('in progrss event')
      message = "Network error";
    }
    else {
      message = httpError.error.message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(message);
  }


}

