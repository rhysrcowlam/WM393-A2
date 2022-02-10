export interface Quizs {
    id: string
    title: string
    questions: string[]
}

export interface ModuleToQuizs {
    id: string //module id
    quizs: string[]
}