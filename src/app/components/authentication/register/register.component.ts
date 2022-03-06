import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    mobile: new FormControl(''),
    company: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(6)),
    creation_id: new FormControl('web'),
    accounttype: new FormControl('user'),
  });

  constructor(private router: Router, private auth: AuthService) {}
  isSuccessful = false;
  isSignUpFailed = false;
  errors = null;
  registerUser() {
    console.log(this.registerForm.value);

    this.auth.register(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire('Registration', 'user created successfully', 'success');
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (error) => {
        this.errors = error.error;
        this.isSignUpFailed = true;
      },
    });
  }

  ngOnInit(): void {}
}
