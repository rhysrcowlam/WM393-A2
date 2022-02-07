import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizSelectionService } from './quiz-selection.abstract.service';
import { Quiz } from './quiz-selection.interface';

@Injectable({
    providedIn: 'root'
})
export class MockQuizSelectionService implements AbstractQuizSelectionService {

    private mockQuizzes: Quiz[] = [
        {
            id: 1,
            title: "SDLC quiz 1",
            questions: []
        },
        {
            id: 2,
            title: "SDLC quiz 2",
            questions: []
        },
        {
            id: 3,
            title: "SDLC quiz 3",
            questions: []
        },
        {
            id: 4,
            title: "SDLC quiz 4",
            questions: []
        },
        {
            id: 5,
            title: "MI quiz 1",
            questions: []
        },
        {
            id: 6,
            title: "MI quiz 2",
            questions: []
        },
        {
            id: 7,
            title: "MI quiz 3",
            questions: []
        },
        {
            id: 8,
            title: "MI quiz 4",
            questions: []
        }
    ];

    public getQuiz(id: string): Observable<Quiz[]> {
        return of(this.mockQuizzes);
    }
} 