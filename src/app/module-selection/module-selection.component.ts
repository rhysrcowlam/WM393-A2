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

  // Runs on component initialisation.
  ngOnInit(): void {
    // Get the value of the userid url parameter.
    this.route.paramMap.subscribe(paramMap => {
      const user = paramMap.get('userid');
      if (user) {
        this.user = user;
      }
    });

    // Retrieve all of the modules stored in the mock service.
    this.moduleService.getModules()
      .subscribe(modules => this.modules = modules);
  }

  // Navigate to the BoardSelection page when the user clicks the quiz button parsing the user id and module id in the url.
  public handleNavigation(module: string): void {
    this.router.navigate(['BoardSelection/', this.user, module]);
  }
}
