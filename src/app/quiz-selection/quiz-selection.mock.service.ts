import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractQuizSelectionService } from './quiz-selection.abstract.service';
import { ModuleToQuizs, Quizs } from './quiz-selection.interface';

@Injectable({
    providedIn: 'root'
})
export class MockQuizSelectionService implements AbstractQuizSelectionService {

    private mockQuizs: Quizs[] = [
        {
            id: "1",
            title: "Software Development Life Cycle quiz 1",
            questions: [
                "1",
                "2",
                "3",
                "4",
            ]
        },
        {
            id: "2",
            title: "Software Development Life Cycle quiz 2",
            questions: [
                "5",
                "6",
                "7",
                "8",
            ]
        },
        {
            id: "3",
            title: "Software Development Life Cycle quiz 3",
            questions: [
                "9",
                "10",
                "11",
                "12",
            ]
        },
        {
            id: "4",
            title: "Software Development Life Cycle quiz 4",
            questions: [
                "13",
                "14",
                "15",
                "16",
            ]
        },
        {
            id: "5",
            title: "Machine Intelligence quiz 1",
            questions: [
                "17",
                "18",
                "19",
                "20",
            ]
        },
        {
            id: "6",
            title: "Machine Intelligence quiz 2",
            questions: [
                "21",
                "22",
                "23",
                "24",
            ]
        },
        {
            id: "7",
            title: "Machine Intelligence quiz 3",
            questions: [
                "25",
                "26",
                "27",
                "28",
            ]
        },
        {
            id: "8",
            title: "Machine Intelligence quiz 4",
            questions: [
                "29",
                "30",
                "31",
                "32",
            ]
        }
    ];

    private moduleData: ModuleToQuizs[] = [
        {
            id: "SDLC",
            quizs: [
                "1",
                "2",
                "3",
                "4"
            ]
        },
        {
            id: "MI",
            quizs: [
                "5",
                "6",
                "7",
                "8"
            ]
        }
    ]

    public getQuizs(id: string): Observable<Quizs[]> {
        return of(this.mockQuizs);
    }

    public getModuleQuizList(id: string): Observable<ModuleToQuizs | undefined> {
        const module = this.moduleData.find(x => x.id == id);
        if (module) {
            return of(module);
        }
        return of(undefined);
    }

    public getModuleQuizs(id: string): Observable<Quizs | undefined> {
        const quiz = this.mockQuizs.find(x => x.id == id);
        if (quiz) {
            return of(quiz);
        }
        return of(undefined);
    }
} 