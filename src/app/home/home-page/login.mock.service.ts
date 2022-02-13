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
      id: '0',
      role: eRoles.Tutor,
      email: 'tutor@gmail.com',
      password: 'Password',
    },
    {
      id: '1',
      role: eRoles.Student,
      email: 'student1@gmail.com',
      password: 'Password',
    },
    {
      id: '2',
      role: eRoles.Student,
      email: 'student2@gmail.com',
      password: 'Password',
    },
    {
      id: '3',
      role: eRoles.Student,
      email: 'student3@gmail.com',
      password: 'Password',
    },

  ];

  public getLoginCredentials(email: string): Observable<Login | undefined> {
    const user = this.mockUsers.find(x => x.email == email);
    if (user) {
      return of(user);
    }
    return of(undefined);
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
    return this.loggedIn;
  }

  public userIsStudent(): boolean {
    if (this.isStudent) {
      return true;
    }
    return false;
  }

  public userIsTutor(): boolean {
    if (this.isTutor) {
      return true;
    }
    return false;
  }

  public getCurrentUser(id: string): Observable<Login | undefined> {
    const currentUser = this.mockUsers.find(x => x.id == id);
    if (currentUser) {
      return of(currentUser);
    }
    return of(undefined);
  }

  public signOutUser(): void {
    this.loggedIn = false;
    this.isStudent = false;
    this.isTutor = false;
  }
} 