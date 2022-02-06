export interface Login {
    id: string
    role: eRoles
    email: string
    password: string
}

export enum eRoles {
    Tutor,
    Student
}