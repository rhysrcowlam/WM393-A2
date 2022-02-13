import { Component, OnInit } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { AbstractQuizService } from './quiz.abstract.service';
import { AbstractQuizResultsService } from '../quiz-results/quiz-results.abstract.service'
import { QuizQuestion } from './quiz.interface';
import { AbstractQuizSelectionService } from '../quiz-selection/quiz-selection.abstract.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {
  public loginStatus: boolean = this.loginService.getLogInStatus()
  public displayResults: boolean = false;
  public quizQuestions: QuizQuestion[] = [];

  public user: string = "";
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
    });

    // Get the value of the quizid url parameter.
    this.route.paramMap.subscribe(paramMap => {
      const quiz = paramMap.get('quizid');
      if (quiz) {
        this.quiz = quiz;
      }
    });

    let questionList: string[] = [];

    // Get the list of question id's assigned to the selected quiz.
    this.quizService.getModuleQuizs(this.quiz)
      .subscribe(quiz => {
        if (quiz) {
          questionList = quiz.questions;
        }
      });

    // Get and return the question object for each question id provided.
    questionList.forEach(quizQuestion =>
      this.quizQuestionService.getQuizQuestions(quizQuestion)
        .subscribe(questions => {
          if (questions) {
            this.quizQuestions.push(questions);
          }
        })
    );
  }

  // Add the student answer and the correct answer to a map for each question.
  public handleAnswer(selectedAnswer: number, questionId: string, correctAnswer: number) {
    this.studentsAnswers.set(questionId, selectedAnswer);
    this.correctAnswerList.set(questionId, correctAnswer);
  }

  // Navigate to the QuizSelection page when the user clicks the Exit button parsing the user id and module id in the url.
  public handleBackNavigation() {
    this.studentsMark = 0;
    this.router.navigate(['QuizSelection/', this.user, this.module]);
  }

  // Handle quiz marking.
  public submitQuiz() {
    // Display QuizResults component.
    this.displayResults = true;

    // For each value in studentsAnswers and correctAnswerList maps, if the values match, increase students mark by 1.
    for (let key of this.studentsAnswers.keys()) {
      if (this.studentsAnswers.get(key) == this.correctAnswerList.get(key)) {
        this.studentsMark = this.studentsMark + 1;
      }
    }

    // Save the result to the results mock service.
    this.quizResults.saveStudentsScore(this.user, this.module, this.quiz, this.studentsMark);
  }
}