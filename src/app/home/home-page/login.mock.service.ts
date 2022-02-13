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

  // Array of user objects.
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

  // Look through the users array for an object with an email that matches the email provided and return the object.
  public getLoginCredentials(email: string): Observable<Login | undefined> {
    const user = this.mockUsers.find(x => x.email == email);
    if (user) {
      return of(user);
    }
    return of(undefined);
  }

  // Check the users array for an object with an email and password that matches the email and password provided.
  public authenticateUser(email: string, password: string): boolean {
    const user = this.mockUsers.find(x => x.email == email && x.password == password);
    if (user) {
      // Set login status to true.
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

  // Get the current login status
  public getLogInStatus(): boolean {
    return this.loggedIn;
  }

  // Check if the current user a student.
  public userIsStudent(): boolean {
    if (this.isStudent) {
      return true;
    }
    return false;
  }

  // Check if the current user a tutor.
  public userIsTutor(): boolean {
    if (this.isTutor) {
      return true;
    }
    return false;
  }

  // Look through the users array for an object with an id that matches the id provided and return the object.
  public getCurrentUser(id: string): Observable<Login | undefined> {
    const currentUser = this.mockUsers.find(x => x.id == id);
    if (currentUser) {
      return of(currentUser);
    }
    return of(undefined);
  }

  // Handle the sign out function setting all flags to false.
  public signOutUser(): void {
    this.loggedIn = false;
    this.isStudent = false;
    this.isTutor = false;
  }
} 