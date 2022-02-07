import { Observable } from 'rxjs';

import { QuizResults } from "./quiz-results.interface";

export abstract class AbstractQuizResultsService {
    public abstract saveStudentsScore(finalScore:  number): void;
} 