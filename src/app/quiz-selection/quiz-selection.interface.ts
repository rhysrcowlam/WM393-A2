import { QuizQuestion } from "../quiz/quiz.interface";

export interface Quiz {
    id: number
    title: string
    questions: QuizQuestion[]
}