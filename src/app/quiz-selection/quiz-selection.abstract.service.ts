import { Observable } from 'rxjs';

import { Quiz } from "./quiz-selection.interface";

export abstract class AbstractQuizSelectionService {
    public abstract getQuiz(id: string): Observable<Quiz[]>;
} 