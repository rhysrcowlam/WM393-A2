import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { AbstractQuizService } from './quiz.abstract.service';
import { AbstractQuizResultsService } from '../quiz-results/quiz-results.abstract.service'
import { QuizQuestion } from './quiz.interface';
import { AbstractQuizSelectionService } from '../quiz-selection/quiz-selection.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @title Radios with ngModel
 */

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus()
  public displayResults: boolean = false;
  public quizQuestions: QuizQuestion[] = [];

  public module: string = "";
  public quiz: string = "";

  public studentsAnswers = new Map<string, number>();
  public correctAnswerList = new Map<string, number>();
  public studentsMark: number = 0;

  constructor(
    public loginService: AbstractLoginService,
    public quizQuestionService: AbstractQuizService,
    public quizService: AbstractQuizSelectionService,
    public quizResults: AbstractQuizResultsService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('module');
      if (title) {
        this.module = title;
      }
    })

    this.route.paramMap.subscribe(paramMap => {
      const title = paramMap.get('quizId');
      if (title) {
        this.quiz = title;
      }
    })

    let questionList: string[] = [];

    this.quizService.getModuleQuizs(this.quiz)
    .subscribe(quiz => {
      if (quiz){
        questionList = quiz.questions;
      }
    });

    questionList.forEach(quiz =>
      this.quizQuestionService.getQuizQuestions(quiz)
        .subscribe(questions => {
          if (questions) {
            this.quizQuestions.push(questions);
          }
        })
    );

    // this.quizQuestionService.getQuizQuestions('1').subscribe(quizQuestions => {
    //   this.quizQuestions = quizQuestions;
    // });
  }

  public handleAnswer(selectedAnswer: number, questionId: string, correctAnswer: number) {
    this.studentsAnswers.set(questionId, selectedAnswer);
    this.correctAnswerList.set(questionId, correctAnswer);
  }

  public handleBackNavigation() {
    this.router.navigate(['QuizSelection/', this.module])
  }

  submitQuiz() {
    this.displayResults = true;

    if (this.studentsAnswers.get("1") == this.correctAnswerList.get("1")) {
      this.studentsMark = this.studentsMark + 1;
    }
    if (this.studentsAnswers.get("2") == this.correctAnswerList.get("2")) {
      this.studentsMark = this.studentsMark + 1;
    }
    if (this.studentsAnswers.get("3") == this.correctAnswerList.get("3")) {
      this.studentsMark = this.studentsMark + 1;
    }
    if (this.studentsAnswers.get("4") == this.correctAnswerList.get("4")) {
      this.studentsMark = this.studentsMark + 1;
    }
    this.quizResults.saveStudentsScore(this.studentsMark);
  }
}