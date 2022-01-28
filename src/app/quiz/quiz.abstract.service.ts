import { Observable } from 'rxjs';

import { QuizQuestion } from "./quiz.interface";

export abstract class AbstractQuizService {
    public abstract getQuizQuestions(id: string): Observable<QuizQuestion[]>;
} 