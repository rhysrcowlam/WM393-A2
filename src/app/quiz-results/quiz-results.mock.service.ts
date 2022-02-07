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

    public saveStudentsScore(finalScore: number): void {
      var savedResult: QuizResults = {studentsScore: finalScore}
      this.mockQuizResults.push(savedResult)
      console.log(this.mockQuizResults)
    }
} 