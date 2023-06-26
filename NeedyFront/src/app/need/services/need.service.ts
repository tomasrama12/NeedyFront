import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

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

  pictures = [
    { skillId: 2, src: "./assets/images/jardinero.jpg" },
    { skillId: 3, src: "./assets/images/carpintero.jpg" },
    { skillId: 4, src: "./assets/images/plomero.jpg" },
    { skillId: 5, src: "./assets/images/cocinero.jpg" },
    { skillId: 6, src: "./assets/images/electricista.jpg" },
    { skillId: 7, src: "./assets/images/albañil.jpg" },
    { skillId: 8, src: "./assets/images/pintor.jpg" },
    { skillId: 9, src: "./assets/images/diseñador.jpg" },
    { skillId: 10, src: "./assets/images/soldador.jpg" },
    { skillId: 11, src: "./assets/images/traductor.jpg" },
    { skillId: 12, src: "./assets/images/mecanico.jpg"}
  ];

  getNeeds(): Observable<any> {
    return this.http.get<Need[]>(`${URL}/get-needs`, { headers }).pipe(
      map(needs => needs.map(need => this.setNeedImageSrc(need))),
      catchError(this.handleError<Need[]>(`getNeeds`))
    );
  }

  getNeedById(id: number): Observable<any> {
    return this.http.get<Need>(`${URL}/get-need-by-id/${id}`, { headers }).pipe(
      map(need => this.setNeedImageSrc(need)),
      catchError(this.handleError<Need>(`getNeedById`))
    );
  }

  getNeedsBySkill(id: number): Observable<any> {
    return this.http.get<Need[]>(`${URL}/get-needs-by-skill/${id}`, { headers }).pipe(
      map(needs => needs.map(need => this.setNeedImageSrc(need))),
      catchError(this.handleError<Need[]>(`getNeedsBySkill`))
    );
  }

  getNeedsBySkillName(term: string): Observable<any> {
    const searchTerm = JSON.stringify(term);
    return this.http.post<Need[]>(`${URL}/get-needs-by-skill-name`, searchTerm, { headers }).pipe(
      map(needs => needs.map(need => this.setNeedImageSrc(need))),
      catchError(this.handleError<Need[]>(`getNeedsBySkillName`))
    );
  }

  getUserCreatedNeeds(ci: string): Observable<any[]> {
    const userCI = JSON.stringify(ci);
    return this.http.post<Need[]>(`${URL}/get-user-created-needs`, userCI, { headers }).pipe(
      map(needs => needs.map(need => this.setNeedImageSrc(need))),
      catchError(this.handleError<Need[]>(`getUserNeeds`))
    );
  }

  getUserAppliedNeeds(ci: string): Observable<any> {
    const userCI = JSON.stringify(ci);
    return this.http.post<Need[]>(`${URL}/get-user-applied-needs`, userCI, { headers }).pipe(
      map(needs => needs.map(need => this.setNeedImageSrc(need))),
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
    return this.http.post<any>(`${URL}/apply-need/${id}`, [], { headers }).pipe(
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

  private setNeedImageSrc(need: Need): Need {
    const dictionary = this.pictures.find(d => d.skillId === need.requestedSkills[0].id);

    if (dictionary) {
      need.imageSrc = dictionary.src;
    }
    return need;
  }

  private handleError<T>(operation: string){
    return (error: any): Observable<any> => {
      if(error.status === 200){
        return of({ error: false });
      }
      console.error(`${operation} failed: ${error.error.message}`);
      return of({ error: true, type: error.error });
    }
  }
}
