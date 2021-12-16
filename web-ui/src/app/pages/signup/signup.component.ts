import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      npiNumber: [null, Validators.required],
      businessAddress: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      emailAddress: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.userService
        .signup(this.signupForm.getRawValue())
        .then((info: Person) => {
          this.router.navigate(['home']);
        })
        .catch((err: any) => {})
        .finally(() => {});
    } else {
      this._snackBar.open('Please fill out all required fields', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  }
}
