import { Component, Input } from '@angular/core';
import { QuizQuestion } from '../quiz/quiz.interface';

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css']
})
export class QuizResultsComponent {
  @Input() question: QuizQuestion = { question: '', correctAnswer: 0, answers: [], id: '' }
  @Input() studentsAnswers = new Map<string, number>()

  constructor() { }

  public displayAnswers() {
    console.log(this.question)
    const id = this.studentsAnswers.get(this.question.id)
    if (id && id > -1) {
      return this.question.answers[id]
    }
    return "Unknown"
  }
}