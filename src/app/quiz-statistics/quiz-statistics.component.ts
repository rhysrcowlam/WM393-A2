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

  public zeroMarks: number = 0;
  public oneMark: number = 0;
  public twoMarks: number = 0;
  public threeMarks: number = 0;
  public fourMarks: number = 0;

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
        if (result.studentsScore == 0) {
          this.zeroMarks = this.zeroMarks + 1;
        }
        else if (result.studentsScore == 1) {
          this.oneMark = this.oneMark + 1;
        }
        else if (result.studentsScore == 2) {
          this.twoMarks = this.twoMarks + 1;
        }
        else if (result.studentsScore == 3) {
          this.threeMarks = this.threeMarks + 1;
        }
        else if (result.studentsScore == 4) {
          this.fourMarks = this.fourMarks + 1;
        }
      }
    })

    this.data = [
      {
        name: "0 out of 4",
        series: [
          {
            name: "Scores",
            value: this.zeroMarks
          }
        ]
      },
      {
        name: "1 out of 4",
        series: [
          {
            name: "Scores",
            value: this.oneMark
          }
        ]
      },
      {
        name: "2 out of 4",
        series: [
          {
            name: "Scores",
            value: this.twoMarks
          }
        ]
      },
      {
        name: "3 out of 4",
        series: [
          {
            name: "Scores",
            value: this.threeMarks
          }
        ]
      },
      {
        name: "4 out of 4",
        series: [
          {
            name: "Scores",
            value: this.fourMarks
          }
        ]
      }
    ]
  }

  public handleBackNavigation() {
    this.router.navigate(['QuizSelection/', this.user, this.module]);
  }
}
