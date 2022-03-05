import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/token/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  errors = null;
  userId = null;
  name = null;
  isSignedIn: boolean;
   Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  loading: boolean;
  constructor(
    private router: Router,
    private auth: AuthService,
    private localStorage: TokenStorageService
  ) // private headers: HttpHeaderResponse
  {}

  ngOnInit(): void {}
  

  loginUser() {
    this.auth
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data: HttpResponse<any>) => {
         this.Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.responseHandler(data);
        },
        (error) => {
          this.loading = false;
        }
      );
  }

  userToken: any;
  userFirstname: any;
  userEmail: any;
  responseHandler(response) {
    this.userToken = response.headers.get('Authorization');
    this.localStorage.handleToken(this.userToken);
    // console.log(this.userToken);
    this.userFirstname = response.body.firstname;
    this.localStorage.handleName(this.userFirstname);
    this.userEmail = response.body.email;
    this.localStorage.handleUserEmail(this.userEmail);
    this.router.navigate(['/dashboard']);

  }
}
