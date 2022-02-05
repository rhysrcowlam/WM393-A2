import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { AbstractLoginService } from './login.abstract.service';
import { Login } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService implements AbstractLoginService {

  private mockUsers: Login[] = [
    {
      id: '1',
      email: 'testUser@gmail.com',
      password: 'Password123',
    }
  ];

  public getLoginCredentials(id: string): Observable<Login[]> {
    return of(this.mockUsers);
  }

  public authenticateUser(email: AbstractControl, password: AbstractControl): boolean {
    if (email.value && password.value in this.mockUsers) {
      return true
    }
    else {
      return false
    }
  }
} 