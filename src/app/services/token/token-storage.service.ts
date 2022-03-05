import { Injectable } from '@angular/core';
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
    console.log(this.getUserid());
    console.log(this.getname());
    
  }

  handleUserEmail(userId) {
    localStorage.setItem('userid', userId);
  }
  handleName(name){
    localStorage.setItem('name', name);
  }
  getname()
  {
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
  sendToRestApiMethod(){

  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }

  payload(token) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.clear();
  }
}
