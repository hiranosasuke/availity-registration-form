import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      emailAddress: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.getUserByEmail();
    } else {
      this._snackBar.open('Please fill out all required fields', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }

  getUserByEmail() {
    this.userService
      .getUserByEmail(this.loginForm.get('emailAddress')?.value)
      .then((info: Person) => {
        if (info) {
          this.router.navigate(['home']);
        } else {
          this._snackBar.open(
            'Invalid email. Please enter valid email or sign up to continue',
            'Close',
            {
              duration: 3000,
              verticalPosition: 'top',
            }
          );
        }
      })
      .catch((err: any) => {})
      .finally(() => {});
  }
}
