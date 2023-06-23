import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { InsertNeed } from 'src/app/core/interfaces/insertNeed';
import { ManageApplier } from 'src/app/core/interfaces/manageApplier';
import { Need } from 'src/app/core/interfaces/need';
import { UpdateNeed } from 'src/app/core/interfaces/updateNeed';

const URL = `${API_URL}/needs`;
const token = localStorage.getItem('token');
const parseToken = JSON.parse(token!);
const headers = new HttpHeaders({
  'Authorization': `Bearer ${parseToken}`,
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(private http: HttpClient) { }

  getNeeds(): Observable<Need[]> {
    return this.http.get<Need[]>(`${URL}/get-needs`, { headers }).pipe(
      catchError(this.handleError<Need[]>(`getNeeds`))
    );
  }

  getNeedById(id: number): Observable<Need> {
    return this.http.get<Need>(`${URL}/get-need-by-id/${id}`, { headers }).pipe(
      catchError(this.handleError<Need>(`getNeedById`))
    );
  }

  getNeedsBySkill(id: number): Observable<Need[]> {
    return this.http.get<Need[]>(`${URL}/get-needs-by-skill/${id}`, { headers }).pipe(
      catchError(this.handleError<Need[]>(`getNeedsBySkill`))
    );
  }

  getNeedsBySkillName(term: string): Observable<Need[]> {
    const searchTerm = JSON.stringify(term);
    console.log('termino users', searchTerm);
    return this.http.post<Need[]>(`${URL}/get-needs-by-skill-name`, searchTerm, { headers }).pipe(
      catchError(this.handleError<Need[]>(`getNeedsBySkillName`))
    );
  }

  getUserCreatedNeeds(ci: string): Observable<Need[]> {
    const userCI = JSON.stringify(ci);
    return this.http.post<Need[]>(`${URL}/get-user-created-needs`, userCI, { headers }).pipe(
      catchError(this.handleError<Need[]>(`getUserNeeds`))
    );
  }

  getUserAppliedNeeds(ci: string): Observable<Need[]> {
    const userCI = JSON.stringify(ci);
    return this.http.post<Need[]>(`${URL}/get-user-applied-needs`, userCI, { headers }).pipe(
      catchError(this.handleError<Need[]>(`getUserAppliedNeeds`))
    );
  }

  insertNeed(info: InsertNeed) {
    return this.http.post<any>(`${URL}/insert-need`, info, { headers }).pipe(
      catchError(this.handleError<any>(`insertNeed`))
    );
  }

  updateNeed(info: UpdateNeed) {
    return this.http.put<any>(`${URL}/update-need`, info, { headers }).pipe(
      catchError(this.handleError<any>(`updateNeed`))
    );
  }

  deleteNeed(id: number) {
    return this.http.delete<any>(`${URL}/delete-need/${id}`, { headers }).pipe(
      catchError(this.handleError<any>(`deleteNeed`))
    );
  }

  applyNeed(id: number) {
    return this.http.post<any>(`${URL}/apply-need/${id}`, { headers }).pipe(
      catchError(this.handleError<any>(`applyNeed`))
    );
  }

  unapplyNeed(id: number) {
    return this.http.delete<any>(`${URL}/unapply-need/${id}`, { headers }).pipe(
      catchError(this.handleError<any>(`unapplyNeed`))
    );
  }

  acceptApplier(info: ManageApplier) {
    return this.http.put<any>(`${URL}/accept-applier`, info, { headers }).pipe(
      catchError(this.handleError<any>(`acceptApplier`))
    );
  }

  declineApplier(info: ManageApplier) {
    return this.http.put<any>(`${URL}/decline-applier`, info, { headers }).pipe(
      catchError(this.handleError<any>(`declineApplier`))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error.message}`);
      return of(result as T);
    }
  }
}
