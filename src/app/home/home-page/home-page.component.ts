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

  // Used for validating user input.
  get email() {
    return this.loginForm.get('email');
  }

  // Used for validating user input.
  get password() {
    return this.loginForm.get('password');
  }

  // Get the value of the Email entered by the user.
  get emailByValue(): string {
    return this.loginForm.get('email')?.value;
  }

  // Get the value of the Password entered by the user.
  get passwordByValue(): string {
    return this.loginForm.get('password')?.value;
  }

  // Handles the Login process.
  submit(): void {
    // .valid checks that loginForm has been filled out correctly.
    if (!this.loginForm.valid) {
      return;
    }

    // Check that the login credentails entered match a set of credentials in the login mock service.
    const authenticated = this.loginService.authenticateUser(this.emailByValue, this.passwordByValue);

    let userRole: string = "";

    // If the entered credentials are valid.
    if (authenticated)  {
      // Get the object the entered credentials match with.
      this.loginService.getLoginCredentials(this.emailByValue)
      .subscribe(user => {
        if (user) {
          // Get the users role.
          userRole = user.role.toString();
        }
      });
      // Navigate to the ModuleSelection parsing the users role into the url.
      this.router.navigate(['ModuleSelection/', userRole]);
    }
    // Inform the user that the credentials are invalid.
    else{
      this._snackBar.open("User is not recognised", undefined, {duration: 6000,});
    }
  }
}