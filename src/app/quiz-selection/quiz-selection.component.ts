import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractQuizSelectionService } from './quiz-selection.abstract.service';
import { Quizs } from './quiz-selection.interface';
import { eRoles } from '../home/home-page/login.interface';
import { AbstractQuizResultsService } from '../quiz-results/quiz-results.abstract.service';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus();
  public user: string = "";
  public module: string = "";
  public quizs: Quizs[] = [];

  constructor(
    public loginService: AbstractLoginService,
    public quizService: AbstractQuizSelectionService,
    public route: ActivatedRoute,
    public router: Router
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

    // Get the value of the module url parameter.
    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('module');
      if (title) {
        this.module = title;
      }
    })

    let moduleQuizs: string[] = [];

    // Get the quiz id's assinged to the module selected.
    this.quizService.getModuleQuizList(this.module)
      .subscribe(moduleQuiz => {
        if (moduleQuiz) {
          moduleQuizs = moduleQuiz.quizs;
        }
      });

    // For each quiz id, return the quiz object with a matching id.
    moduleQuizs.forEach(quiz =>
      this.quizService.getModuleQuizs(quiz)
        .subscribe(quizs => {
          if (quizs) {
            this.quizs.push(quizs);
          }
        })
    );
  }

  // Handle navigation from clicking a quiz button.
  public handleNavigation(id: string) {
    let userType: eRoles = 0;

    // Get the current user type.
    this.loginService.getCurrentUser(this.user)
      .subscribe(currentUser => {
        if (currentUser) {
          userType = currentUser.role;
        }
      });
    
    // If the user is a tutor, navigate to the quiz statistics page parsing the user id, module id, and quiz id in the url.
    if (userType == 0) {
      this.router.navigate(['QuizStatistics/', this.user, this.module, id])
    }
    // If the user is a student, navigate to the quiz statistics page parsing the user id, module id, and quiz id in the url.
    else if (userType == 1) {
      this.router.navigate(['Quiz/', this.user, this.module, id])
    }
  }
}
