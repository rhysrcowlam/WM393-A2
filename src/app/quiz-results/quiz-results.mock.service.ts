import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizResultsService } from './quiz-results.abstract.service';
import { QuizResults } from './quiz-results.interface';

@Injectable({
  providedIn: 'root'
})
export class MockQuizResultsService implements AbstractQuizResultsService {

  // Array of quiz result objects used for saving the results of a student quiz attempt.
  private mockQuizResults: QuizResults[] = []

  // Method recieves quiz result details and saves the values to the Quiz results array as an object
  public saveStudentsScore(studentId: number, moduleId: string, quizId: string, finalScore: number): void {
    var savedResult: QuizResults = { studentId: studentId, moduleId: moduleId, quizId: quizId, studentsScore: finalScore };
    this.mockQuizResults.push(savedResult);
  }

  // Method recieves quiz id and returns a representation of all of the objects stored within the results array.
  public getQuizResults(id: string): Observable<QuizResults[]> {
    return of(this.mockQuizResults)
  }

  // Check data service for a certain result.
  public checkForResult(quizId: string, studentId: number): boolean {
    const userAttempt = this.mockQuizResults.find(x => x.quizId == quizId && x.studentId == studentId);
    if (userAttempt) {
      return true;
    }
    else {
      return false;
    }
  }
} 