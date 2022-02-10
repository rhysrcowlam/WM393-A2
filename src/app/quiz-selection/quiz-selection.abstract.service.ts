import { Observable } from 'rxjs';

import { ModuleToQuizs, Quizs } from "./quiz-selection.interface";

export abstract class AbstractQuizSelectionService {
    public abstract getQuizs(id: string): Observable<Quizs[]>;
    public abstract getModuleQuizList(id: string): Observable<ModuleToQuizs | undefined>;
    public abstract getModuleQuizs(id: string): Observable<Quizs | undefined>;
} 