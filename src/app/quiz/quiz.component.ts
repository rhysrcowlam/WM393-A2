import { Component, OnInit } from '@angular/core';
import { AbstractQuizService } from './quiz.abstract.service';
import { QuizQuestion } from './quiz.interface';

/**
 * @title Radios with ngModel
 */

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit{

  public displayResults: boolean = false
  public quizQuestions: QuizQuestion[] = []
  public studentsAnswers = new Map<string, number>()
  public correctAnswerList = new Map<string, number>()
  public studentsMark: number = 0

  constructor(
    public quizService: AbstractQuizService
  ) { }
  
  ngOnInit() {
      this.quizService.getQuizQuestions('1').subscribe(quizQuestions =>{
        this.quizQuestions = quizQuestions
      })
  }

  public handleAnswer(selectedAnswer: number, questionId: string, correctAnswer: number) {
    this.studentsAnswers.set(questionId, selectedAnswer)
    this.correctAnswerList.set(questionId, correctAnswer)
  }


  submitQuiz() {
    this.displayResults = true
    
    console.log(this.studentsAnswers)
    console.log(this.correctAnswerList)
    console.log(this.quizQuestions)

    if (this.studentsAnswers.get("1") == this.correctAnswerList.get("1")) {
      this.studentsMark = this.studentsMark + 1
    }
    if (this.studentsAnswers.get("2") == this.correctAnswerList.get("2")) {
      this.studentsMark = this.studentsMark + 1
    }
    if (this.studentsAnswers.get("3") == this.correctAnswerList.get("3")) {
      this.studentsMark = this.studentsMark + 1
    }
    if (this.studentsAnswers.get("4") == this.correctAnswerList.get("4")) {
      this.studentsMark = this.studentsMark + 1
    }
  }
}