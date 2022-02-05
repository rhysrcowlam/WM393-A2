import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizQuestion } from '../quiz.interface';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {
  @Input() question: QuizQuestion = { question: '', correctAnswer: 0, answers: [], id: '' }

  @Output() selectionChangeEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  public changeHandler(answer: string) {
    const index = this.question.answers.findIndex(x => answer == x)
    if (index > -1) {
      this.selectionChangeEvent.emit(index)
    }
  }
}
