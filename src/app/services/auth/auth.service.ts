import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap, Observable } from 'rxjs';
import { EmailValidator } from '@angular/forms';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

const AUTH_API = 'https://app.alfamindstech.com/powermail-dev/users/';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     observe: 'response',
//   }),
// };
const creation_id = 'web';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //api call to register the user
  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', user);
  }
  //api call to login user
  login(user:any):Observable<any>{
    return this.http.post<any>(AUTH_API + 'login', user,
  {observe: 'response' as 'body'})
  .pipe(map(user => {
       return user;
  }));
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //api call to varify user
  verifyToken(token): Observable<any> {
    return this.http.post(AUTH_API + 'token/verify', token, {
      headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
    });
  }
}
