import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AbstractLoginService } from './login.abstract.service';
import { eRoles, Login } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService implements AbstractLoginService {
  public loggedIn: boolean = false;
  public isStudent: boolean = false;
  public isTutor: boolean = false;

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
      this.loggedIn = true;

      if (user.role == 0) {
        this.isTutor = true;
      }
      else if (user.role == 1) {
        this.isStudent = true;
      }

      return true;
    }
    else {
      return false;
    }
  }

  public getLogInStatus(): boolean {
    return this.loggedIn
  }

  public getRoleTutor(): boolean {
    return this.isTutor
  }

  public getRoleStudent(): boolean {
    return this.isStudent
  }

  public signOutUser(): void {
    this.loggedIn = false;
    this.isStudent = false;
    this.isTutor = false;
  }
} 