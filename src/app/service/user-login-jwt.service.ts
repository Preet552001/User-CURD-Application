import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { UserLoginpost } from '../interface/userLoginpost';

@Injectable({
  providedIn: 'root',
})
export class UserLoginJwtService {

  constructor(private http: HttpClient) {}

  datatoggle = new BehaviorSubject(false);
  currentDatatoggle = this.datatoggle.asObservable();

  // isLoggedin=false;
  userLoginJwtApi(userName,password){
    return this.http.post('http://localhost:8080/jwt/login',{"userName":userName,"password":password});
  }
  logout() {
    this.datatoggle.next(false)
    // this.isLogged = false;
    // localStorage.setItem('isLogged', 'false');
    localStorage.setItem('jwt',null);
    // localStorage.setItem('user',null);
  }
}
