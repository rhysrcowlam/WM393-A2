import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractLoginService } from './login.abstract.service';
import { eRoles, Login } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService implements AbstractLoginService {
  public loggedIn: boolean = false;

  private mockUsers: Login[] = [
    {
      id: '1',
      role: eRoles.Student,
      email: 'testUser@gmail.com',
      password: 'Password123',
    }
  ];

  public getLoginCredentials(id: string): Observable<Login[]> {
    return of(this.mockUsers);
  }

  public authenticateUser(email: string, password: string): boolean {
    const user = this.mockUsers.find(x => x.email == email && x.password == password);
    if (user) {
      this.loggedIn = true
      return true;
    }
    else {
      return false;
    }
  }

  public getLogInStatus(): boolean {
    return this.loggedIn
  }

  public signOutUser(): void {
    this.loggedIn = false;
  }
} 