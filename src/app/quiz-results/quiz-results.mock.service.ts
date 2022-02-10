import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizResultsService } from './quiz-results.abstract.service';
import { QuizResults } from './quiz-results.interface';

@Injectable({
  providedIn: 'root'
})
export class MockQuizResultsService implements AbstractQuizResultsService {

  private mockQuizResults: QuizResults[] = [

  ]

  public saveStudentsScore(studentId: string, moduleId: string, quizId: string, finalScore: number): void {
    var savedResult: QuizResults = { studentId: studentId, moduleId: moduleId, quizId: quizId, studentsScore: finalScore };
    this.mockQuizResults.push(savedResult);
  }

  public getQuizResults(id: string): Observable<QuizResults[]> {
    return of(this.mockQuizResults)
  }
} 