import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractLoginService } from './login.abstract.service';
import { Login } from './login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  public userLogin: Login[] = []

  constructor(
    public loginService: AbstractLoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getLoginCredentials('1').subscribe(userLogin => {
      this.userLogin = userLogin
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    else {
      if (this.email && this.password !== null) {
        this.loginService.authenticateUser(this.email, this.password)
      }
      // if (this.loginService.authenticateUser.) {
      //   this.router.navigate(['ModuleSelection'])
      // }
    }
  }
}