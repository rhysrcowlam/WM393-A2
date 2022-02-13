import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { Router } from '@angular/router';
import { AbstractModuleService } from '../module-selection/modules.abstract.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public loginService: AbstractLoginService,
    public modueService: AbstractModuleService,
    public router: Router,
  ) { }

  ngOnInit(): void { }

  public navigateToModules(): void {
    // If a user is logged in navigate to the ModuleSelection page.
    if (this.loginService.getLogInStatus()) {
      // If the user is a tutor navigate to the tutor view of the ModuleSelection page.
      if (this.loginService.userIsTutor()) {
        this.router.navigate(['ModuleSelection/0']);
      }
      // If the user is a student navigate to the tutor view of the ModuleSelection page.
      else if (this.loginService.userIsStudent()) {
        this.router.navigate(['ModuleSelection/1']);
      }
    }
  }

  // If a user is logged in navigate to the BoardSelection page.
  public navigateToBoards(): void {
    if (this.loginService.getLogInStatus()) {
      if (this.loginService.userIsTutor()) {
        // If the current module is the SDLC module navigate to the tutor view of the SDLC BoardSelection page.
        if (this.modueService.sdlcCurrentModule()) {
          this.router.navigate(['BoardSelection/0/SDLC']);
        }
        // If the current module is the MI module navigate to the tutor view of the MI BoardSelection page.
        else if (this.modueService.miCurrentModule()) {
          this.router.navigate(['BoardSelection/0/MI']);
        }
      }
      // If the current module is the SDLC module navigate to the student view of the SDLC BoardSelection page.
      else if (this.loginService.userIsStudent()) {
        if (this.modueService.sdlcCurrentModule()) {
          this.router.navigate(['BoardSelection/1/SDLC']);
        }
        // If the current module is the MI module navigate to the student view of the MI BoardSelection page.
        else if (this.modueService.miCurrentModule()) {
          this.router.navigate(['BoardSelection/1/MI']);
        }
      }
    }
  }

  // Navigate back to the login page and set the Logged in flag to false.
  public signOut(): void {
    this.loginService.signOutUser();
    this.router.navigate(['HomePage'])
  }
}
