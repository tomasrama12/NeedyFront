import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

import * as moment from "moment";
import { API_URL } from 'src/app/core/const';
import { InsertUser } from 'src/app/core/interfaces/insertUser';
import { UserService } from 'src/app/helper/services/user.service';

const URL = `${API_URL}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  login(email: string, password: string) {
    return this.http.post<any>(`${URL}/login`, { email, password }).pipe(
      tap(res => this.setSession(res)),
      map(_res => { return { error: false, type: 'success' } }),
      catchError(this.handleError<any>('login'))
    );
  }

  signup(info: InsertUser) {
    return this.http.post<any>(`${URL}/register`, info).pipe(
      catchError(this.handleError<any>('signup'))
    );
  }

  setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    this.userService.SetUser(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  private handleError<T>(operation: String) {
    return (error: any) => {
      console.error(`${operation} failed: ${error.error.message}`);
      if (error.error.name == 'CredentialsAlredyExistsError') {
        return of({ error: true, type: 'RepitedCredentials' });
      } else if (error.error.name == 'InvalidUsernameOrPassword') {
        return of({ error: true, type: 'InvalidCredentials' });
      } else {
        return of({ error: true, type: 'Server' });
      }
    };
  }
}
