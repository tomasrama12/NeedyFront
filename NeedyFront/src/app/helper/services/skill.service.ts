import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { Skill } from 'src/app/core/interfaces/skill';

const URL = `${API_URL}/needs`;
const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${URL}/get-skills`, { headers }).pipe(
      catchError(this.handleError<Skill[]>(`getSkills`))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }
}
