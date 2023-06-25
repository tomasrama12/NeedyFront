import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { UpdateUser } from 'src/app/core/interfaces/updateUser';
import { User } from 'src/app/core/interfaces/user';

const URL = `${API_URL}/users`;
const token = localStorage.getItem('token');
const parseToken = JSON.parse(token!);
const headers = new HttpHeaders({
  'Authorization': `Bearer ${parseToken}`,
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pictures = [
    { ci: "12345678", src: "./assets/images/profile8.jpg" },//juan
    { ci: "13579246", src: "./assets/images/profile1.jpg" },//ana
    { ci: "23456789", src: "./assets/images/profile2.jpg" },//laura
    { ci: "24681357", src: "./assets/images/profile6.jpg" },//alejandro
    { ci: "34567890", src: "./assets/images/profile3.jpg" },//carla
    { ci: "57924680", src: "./assets/images/profile4.jpg" },//carolina
    { ci: "86420975", src: "./assets/images/profile7.jpg" },//lucas
    { ci: "87654321", src: "./assets/images/profile9.jpg" },//martin
    { ci: "90876543", src: "./assets/images/profile10.jpg" },//pedro
    { ci: "98765432", src: "./assets/images/profile5.jpg"}//maria
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/get-users`, { headers }).pipe(
      map(users => users.map(user => this.setUserImageSrc(user))),
      catchError(this.handleError<User[]>(`getUsers`))
    );
  }

  getUserBySkill(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/get-users-by-skill/${id}`, { headers }).pipe(
      map(users => users.map(user => this.setUserImageSrc(user))),
      catchError(this.handleError<User[]>(`getUserBySkill`))
    );
  }

  getUsersBySkillName(term: string): Observable<User[]> {
    const searchTerm = JSON.stringify(term);
    return this.http.post<User[]>(`${URL}/get-users-by-skill-name`, searchTerm, { headers }).pipe(
      map(users => users.map(user => this.setUserImageSrc(user))),
      catchError(this.handleError<User[]>(`getUsersBySkillName`))
    );
  }

  getUserByCI(ci: string): Observable<User> {
    const userCI = JSON.stringify(ci);
    return this.http.post<User>(`${URL}/get-user-by-ci`, userCI, { headers }).pipe(
      map(user => this.setUserImageSrc(user)),
      catchError(this.handleError<User>(`getUserByCI`))
    );
  }

  updateUser(info: UpdateUser) {
    return this.http.put<any>(`${URL}/update-user`, info, { headers }).pipe(
      catchError(this.handleError<any>(`updateUser`))
    );
  }

  private setUserImageSrc(user: User): User {
    const dictionary = this.pictures.find(d => d.ci === user.ci);

    if (dictionary) {
      user.imageSrc = dictionary.src;
    } else {
      user.imageSrc = "./assets/images/profile0.jpg";
    }
    return user;
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error}`);
      return of(result as T);
    }
  }
}
