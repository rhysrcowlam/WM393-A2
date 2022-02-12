import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { AbstractModuleService } from './modules.abstract.service';
import { ModuleSelection } from './modules.interface';

@Component({
  selector: 'app-module-selection',
  templateUrl: './module-selection.component.html',
  styleUrls: ['./module-selection.component.css']
})
export class ModuleSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus();
  public user: string = "";
  public modules: ModuleSelection[] = [];

  constructor(
    public loginService: AbstractLoginService,
    public moduleService: AbstractModuleService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const user = paramMap.get('userid');
      if (user) {
        this.user = user;
      }
    });

    this.moduleService.getModules()
      .subscribe(modules => this.modules = modules);
  }

  public handleNavigation(module: string): void {
    this.router.navigate(['BoardSelection/', this.user, module]);
  }
}
