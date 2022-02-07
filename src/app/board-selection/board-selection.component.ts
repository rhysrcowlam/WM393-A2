import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-selection',
  templateUrl: './board-selection.component.html',
  styleUrls: ['./board-selection.component.css']
})
export class BoardSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus()

  constructor (
    public loginService: AbstractLoginService,
    public router:Router
    ) { }

  ngOnInit(): void {
  }

}
