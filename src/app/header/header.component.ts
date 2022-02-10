import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public module: string = "";

  constructor(
    public loginService: AbstractLoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }

  public navigateToModules() {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['ModuleSelection']);
    }
  }

  public navigateToBoards() {
    if (this.loginService.getLogInStatus()) {
      this.router.navigate(['BoardSelection/', this.module]);
    }
  }

  public signOut() {
    this.loginService.signOutUser();
    this.router.navigate(['HomePage'])
  }
}
