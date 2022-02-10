import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractQuizSelectionService } from './quiz-selection.abstract.service';
import { Quizs } from './quiz-selection.interface';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus();
  public module: string = "";
  public quizs: Quizs[] = [];

  constructor(
    public loginService: AbstractLoginService,
    public quizService: AbstractQuizSelectionService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('module');
      if (title) {
        this.module = title;
      }
    })

    let moduleQuizs: string[] = [];

    this.quizService.getModuleQuizList(this.module)
    .subscribe(moduleQuiz => {
      if (moduleQuiz){
        moduleQuizs = moduleQuiz.quizs;
      }
    });

    moduleQuizs.forEach(quiz =>
      this.quizService.getModuleQuizs(quiz)
        .subscribe(quizs => {
          if (quizs) {
            this.quizs.push(quizs);
          }
        })
    );

    // this.quizService.getQuizzes('1')
    // .subscribe(quiz => { this.quiz = quiz });
  }

  public handleNavigation(id: string) {
    this.router.navigate(['Quiz/', this.module, id])
  }
}
