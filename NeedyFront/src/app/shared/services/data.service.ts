import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  needId!: number;
  userCI!: string;
  searchIndex!: number;

  constructor() { }
}
