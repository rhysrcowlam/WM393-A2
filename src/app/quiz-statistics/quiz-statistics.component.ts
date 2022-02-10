import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { AbstractQuizResultsService } from '../quiz-results/quiz-results.abstract.service';
import { QuizResults } from '../quiz-results/quiz-results.interface';


@Component({
  selector: 'app-quiz-statistics',
  templateUrl: './quiz-statistics.component.html',
  styleUrls: ['./quiz-statistics.component.css']
})
export class QuizStatisticsComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus()

  public user: string = "";
  public module: string = "";
  public quiz: string = "";

  public data: { name: string, series: { name: string, value: number }[] }[] = [];
  barColor = ['#a9ce97', '#a5b5de'];
  domain = [0, 4];


  constructor(
    public loginService: AbstractLoginService,
    public results: AbstractQuizResultsService,
    public route: ActivatedRoute,
    public router: Router
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const user = paramMap.get('userid');
      if (user) {
        this.user = user;
      }
    });

    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('module');
      if (title) {
        this.module = title;
      }
    });

    this.route.paramMap.subscribe(paramMap => {
      const quiz = paramMap.get('quizid');
      if (quiz) {
        this.quiz = quiz;
      }
    });

    let results: QuizResults[] = [];

    this.results.getQuizResults(this.quiz)
      .subscribe(resultList => {
        if (resultList) {
          results = resultList
        }
      })

    results.forEach(result => {
      if (result.quizId == this.quiz && result.moduleId == this.module) {
        this.data.push(
          {
            name: "Student" + result.studentId,
            series: [
              {
                name: result.moduleId + " Quiz " + result.quizId,
                value: result.studentsScore
              }
            ]
          }
        )
      }
    })
  }

  public handleBackNavigation() {
    this.router.navigate(['QuizSelection/', this.user, this.module]);
  }
}
