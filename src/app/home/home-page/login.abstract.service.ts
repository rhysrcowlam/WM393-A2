import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Login } from "./login.interface";

export abstract class AbstractLoginService {
    public abstract getLoginCredentials(id: string): Observable<Login[]>;
    public abstract authenticateUser(email: string, password: string): boolean;
    public abstract getLogInStatus(): boolean;
    public abstract signOutUser(): void;
} 