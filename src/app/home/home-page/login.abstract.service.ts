import { Observable } from 'rxjs';

import { Login } from "./login.interface";

export abstract class AbstractLoginService {
    public abstract getLoginCredentials(email: string): Observable<Login | undefined>;
    public abstract authenticateUser(email: string, password: string): boolean;
    public abstract getLogInStatus(): boolean;
    public abstract getCurrentUser(id: string): Observable<Login | undefined>;
    public abstract signOutUser(): void;
} 