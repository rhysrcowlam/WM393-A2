import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { SenderService } from '../sender.service';

/**
 * @title Radios with ngModel
 */

@Component({
  selector: 'app-sdlc-quiz1',
  templateUrl: './sdlc-quiz1.component.html',
  styleUrls: ['./sdlc-quiz1.component.css']
})

export class SdlcQuiz1Component {
  constructor(
    private router: Router,
    private service: SenderService
  ) { }

  public displayResults: boolean = false
  
  studentsMark = 0

  studentsAnswerQ1: string = ''

  Q1: string[] = ['The set of instructions telling a computer how to work.',
  'A program that tells a computer what to do.',
  'A group of programs performing a specific task.',
  'A collection of programs coordinating with the hardware to run the machine for any purpose.'
  ];

  Q1correctAnswer: string = 'A collection of programs coordinating with the hardware to run the machine for any purpose.'

  studentsAnswerQ2: string = ''

  Q2: string[] = ['Stand-alone software',
  'Interactive transaction-based software',
  'Embedded control software',
  'Batch processing software',
  'Assignment marking software',
  ];

  Q2correctAnswer: string = 'Assignment marking software'

  studentsAnswerQ3: string = ''

  Q3: string[] = ['Maintainable',
  'Efficient',
  'Dependable',
  'Unacceptable',
  ];

  Q3correctAnswer: string = 'Unacceptable'

  studentsAnswerQ4: string = ''

  Q4: string[] = ['Scales',
  'WebCraft',
  'C++',
  'RGBKeyboard',
  ];

  Q4correctAnswer: string = 'C++'

  Q1AnswerChangedHandler (event: MatRadioChange) {
      this.studentsAnswerQ1 = event.value
  }

  Q2AnswerChangedHandler (event: MatRadioChange) {
    this.studentsAnswerQ2 = event.value
  }

  Q3AnswerChangedHandler (event: MatRadioChange) {
    this.studentsAnswerQ3= event.value
  }

  Q4AnswerChangedHandler (event: MatRadioChange) {
    this.studentsAnswerQ4 = event.value
  }

  markAnswers () {

    if (this.studentsAnswerQ1 == this.Q1correctAnswer) {
      this.studentsMark += 1
    }
    if (this.studentsAnswerQ2 == this.Q2correctAnswer) {
      this.studentsMark += 1
    }
    if (this.studentsAnswerQ3 == this.Q3correctAnswer) {
      this.studentsMark += 1
    }
    if (this.studentsAnswerQ4 == this.Q4correctAnswer) {
      this.studentsMark += 1
    }
    return this.studentsMark
  }

  submitQuiz (event: any) {
    this.markAnswers()
    this.service.variable1 = this.studentsMark.toString()
    this.displayResults = true
    console.log("test")
  }
}