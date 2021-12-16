import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      emailAddress: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['home']);
    } else {
      this._snackBar.open('Please fill out all required fields', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
}
