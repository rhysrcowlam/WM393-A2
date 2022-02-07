import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';

@Component({
  selector: 'app-module-selection',
  templateUrl: './module-selection.component.html',
  styleUrls: ['./module-selection.component.css']
})
export class ModuleSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus()

  constructor(public loginService: AbstractLoginService) { }

  ngOnInit(): void {
  }
}
