import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public loginService: AbstractLoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToModules() {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['ModuleSelection']);
    }
  }

  public navigateToBoards() {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['BoardSelection']);
    }
  }

  public signOut() {
    this.loginService.signOutUser();
    this.router.navigate(['HomePage'])
  }
}
