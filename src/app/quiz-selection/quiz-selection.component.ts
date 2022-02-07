import { Component } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent {
  public loginStatus: boolean = this.loginService.getLogInStatus()
  
  constructor(
    public loginService: AbstractLoginService,
    public router:Router
    ) { }
}
