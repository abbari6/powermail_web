import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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
    mobile: new FormControl('', Validators.pattern('[0-9 ]*')),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.minLength(8)),
    creation_id : new FormControl('web')
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
