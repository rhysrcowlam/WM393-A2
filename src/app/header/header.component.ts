import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public loginService: AbstractLoginService,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  public navigateToModules(): void {
    console.log(this.loginService.getLogInStatus())
    console.log(this.loginService.userIsTutor())
    console.log(this.loginService.userIsStudent())


    // If a user is logged in navigate to the ModuleSelection page.
    if (this.loginService.getLogInStatus()) {
      if (this.loginService.userIsTutor()) {
        this.router.navigate(['ModuleSelection/0']);
      }
      else if (this.loginService.userIsTutor() == true) {
        console.log(this.loginService.userIsStudent())
        this.router.navigate(['ModuleSelection/1']);
      }
    }
  }

  // If a user is logged in navigate to the BoardSelection page.
  public navigateToBoards(): void {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['BoardSelection']);
    }
  }

  // Navigate back to the login page and set the Logged in flag to false.
  public signOut(): void {
    this.loginService.signOutUser();
    this.router.navigate(['HomePage'])
  }
}
