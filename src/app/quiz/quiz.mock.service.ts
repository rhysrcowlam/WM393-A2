import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizService } from './quiz.abstract.service';
import { QuizQuestion } from './quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class MockQuizService implements AbstractQuizService {

  private mockQuizQuestions: QuizQuestion[] = [
    {
      id: '1',
      question: 'What is the definition of Software?',
      answers: ['The set of instructions telling a computer how to work.',
      'A program that tells a computer what to do.',
      'A group of programs performing a specific task.',
      'A collection of programs coordinating with the hardware to run the machine for any purpose.'],
      correctAnswer: 3,
    },
    {
      id: '2',
      question: 'Which of the following is not a type of Software?',
      answers: ['Stand-alone software',
      'Interactive transaction-based software',
      'Embedded control software',
      'Batch processing software',
      'Assignment marking software'],
      correctAnswer: 4,
    },
    {
      id: '3',
      question: 'Which of the following is not a characteristic of good Software?',
      answers: ['Maintainable',
      'Efficient',
      'Dependable',
      'Unacceptable'],
      correctAnswer: 3,
    },
    {
      id: '4',
      question: 'Which of the following is real programming language?',
      answers: ['Scales',
      'WebCraft',
      'C++',
      'RGBKeyboard'],
      correctAnswer: 2,
    },
  ];

  public getQuizQuestions(id: string): Observable<QuizQuestion[]> {
    return of(this.mockQuizQuestions);
  }
} 