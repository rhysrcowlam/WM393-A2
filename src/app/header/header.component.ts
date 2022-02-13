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

  ngOnInit(): void {}

  public navigateToModules(): void {
    console.log(this.loginService.getLogInStatus())
    console.log(this.loginService.userIsTutor())
    console.log(this.loginService.userIsStudent())


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

  public navigateToBoards(): void {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['BoardSelection']);
    }
  }

  public signOut(): void {
    this.loginService.signOutUser();
    this.router.navigate(['HomePage'])
  }
}
