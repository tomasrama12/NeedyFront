import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { InsertRating } from 'src/app/interfaces/insertRating';
import { Rating } from 'src/app/interfaces/rating';

const URL = `${API_URL}/ratings`;
const token = localStorage.getItem('token');
const parseToken = JSON.parse(token!);
const headers = new HttpHeaders({
  'Authorization': `Bearer ${parseToken}`
});

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getUserRating(ci: string): Observable<Rating[]> {
    return this.http.post<Rating[]>(`${URL}/get-ratings-by-user`, ci, { headers }).pipe(
      catchError(this.handleError<Rating[]>(`getUserRating`))
    );
  }

  insertNRating(info: InsertRating) {
    return this.http.post<any>(`${URL}/insert-rating`, info, { headers }).pipe(
      catchError(this.handleError<any>(`insertNRating`))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error}`);
      return of(result as T);
    }
  }
}