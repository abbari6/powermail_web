import { Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private issuer = {
    login: 'http://localhost:8000/api/auth/login',
    register: 'http://localhost:8000/api/auth/register',
  };

  constructor(private router: Router) {
  }

  name: any;
  email: any;
  token: any;

  handleuser(userObj) {
    this.token = userObj.headers.get('Authorization');
    // console.log(this.token);
    localStorage.setItem('user', JSON.stringify(userObj));
    this.name = userObj.body.firstname;
    console.log(this.name);
  }

  getUser() {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    var email = user.body.email;
    // console.log();
  }

  handleUserEmail(userId) {
    localStorage.setItem('userid', userId);
  }
  handleName(name) {
    localStorage.setItem('name', name);
  }
  getname() {
    return localStorage.getItem('name');
  }
  getUserid() {
    return localStorage.getItem('userid');
  }

  handleToken(userToken) {
    localStorage.setItem('auth_token', userToken);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  // isValidToken() {
  //   const token = this.getToken();

  //   if (token) {
  //     const payload = this.payload(token);
  //     if (payload) {
  //       return Object.values(this.issuer).indexOf(payload.iss) > -1
  //         ? true
  //         : false;
  //     }
  //   } else {
  //     return false;
  //   }
  //   if(!this.getToken){
  //     return true
  //   }
  // }

  // payload(token) {
  //   const jwtPayload = token.split('.')[1];
  //   return JSON.parse(atob(jwtPayload));
  // }

  // User state based on valid token
  // isLoggedIn() {
  //  if(!this.getToken){
  //    return true;

  //  }
  //  else{
  //    return false
  //  }

  // }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  // Remove token
  removeToken() {
    localStorage.clear();
  }
}
