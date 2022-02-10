import { Observable } from "rxjs";
import { QuizResults } from "./quiz-results.interface";

export abstract class AbstractQuizResultsService {
    public abstract saveStudentsScore(studentID: string, moduleID:string, quizId:string, finalScore:  number): void;
    public abstract getQuizResults(id: string): Observable<QuizResults[]>;
} 