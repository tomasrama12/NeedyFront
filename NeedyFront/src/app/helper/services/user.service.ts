import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { UpdateUser } from 'src/app/core/interfaces/updateUser';
import { User } from 'src/app/core/interfaces/user';

const URL = `${API_URL}/users`;
const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userInfo?: User;

  constructor(private http: HttpClient) { }

  get User() {
    return this.userInfo;
  }

  SetUser(user: User | undefined) {
    this.userInfo = user;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/get-users`, { headers }).pipe(
      catchError(this.handleError<User[]>(`getUsers`))
    );
  }

  getUserBySkill(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/get-users-by-skill/${id}`, { headers }).pipe(
      catchError(this.handleError<User[]>(`getUserBySkill`))
    );
  }

  getUserByCI(ci: string): Observable<User> {
    return this.http.post<User>(`${URL}/get-user-by-ci`, ci, { headers }).pipe(
      catchError(this.handleError<User>(`getUserByCI`))
    );
  }

  updateUser(info: UpdateUser) {
    return this.http.put<any>(`${URL}/update-user`, info, { headers }).pipe(
      catchError(this.handleError<any>(`updateUser`))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }
}
