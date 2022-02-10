import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractLoginService } from './login.abstract.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    public loginService: AbstractLoginService,
    private router: Router,
    private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get emailByValue(): string {
    return this.loginForm.get('email')?.value;
  }

  get passwordByValue(): string {
    return this.loginForm.get('password')?.value;
  }

  submit() {
    // .valid checks that loginForm has been filled out correctly.
    if (!this.loginForm.valid) {
      return;
    }

    const authenticated = this.loginService.authenticateUser(this.emailByValue, this.passwordByValue);

    let userRole: string = "";

    if (authenticated)  {
      this.loginService.getLoginCredentials(this.emailByValue)
      .subscribe(user => {
        if (user) {
          userRole = user.id;

        }
      });

      this.router.navigate(['ModuleSelection/', userRole]);
    }

    else{
      this._snackBar.open("User is not recognised", undefined, {duration: 2000,});
    }
  }
}