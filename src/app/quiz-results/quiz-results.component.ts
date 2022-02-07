import { Component, Input } from '@angular/core';
import { AbstractLoginService } from '../home/home-page/login.abstract.service';
import { QuizQuestion } from '../quiz/quiz.interface';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent {
  @Input() question: QuizQuestion = { question: '', correctAnswer: 0, answers: [], id: '' }
  @Input() studentsAnswers = new Map<string, number>()

  public loginStatus: boolean = this.loginService.getLogInStatus()
  
  constructor(
    public loginService: AbstractLoginService,
  ) { }

  public displayAnswers() {
    const id = this.studentsAnswers.get(this.question.id)
    if (id !== undefined && id > -1) {
      return this.question.answers[id]
    }
    return "Not attempted"
  }
}