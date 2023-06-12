import { Component, OnInit } from '@angular/core';

import { Need } from 'src/app/core/interfaces/need';
import { NeedService } from '../../services/need.service';

@Component({
  selector: 'app-need-page',
  templateUrl: './need-page.component.html',
  styleUrls: ['./need-page.component.css']
})
export class NeedPageComponent implements OnInit {

  need?: Need;

  //TODO: cuidado aca, fijate que este bien el metodo de abajo xd
  isRequestor: boolean = false;

  //TODO: MAXI CAMBIA EL needTest por need cuando pruebes con los datos reales// CAMBIALO EN EL HTML TMB
  needTest: Need = {
    id: 1,
    requestor: {
      ci: "12345678",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      zone: "City",
      phone: "555-1234",
      age: 30,
      skills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      avgRating: 4.5,
      aboutMe: "I am a skilled professional with experience in various fields."
    },
    appliers: [
      {
        ci: "12345678",
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        zone: "City",
        phone: "555-1234",
        age: 30,
        skills: [
          { id: 1, name: "Expert" },
          { id: 2, name: "Intermediate" },
          { id: 3, name: "Advanced" }
        ],
        avgRating: 4.5,
        aboutMe: "I am a skilled professional with experience in various fields."
      },
      {
        ci: "12345678",
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        zone: "City",
        phone: "555-1234",
        age: 30,
        skills: [
          { id: 1, name: "Expert" },
          { id: 2, name: "Intermediate" },
          { id: 3, name: "Advanced" }
        ],
        avgRating: 4.5,
        aboutMe: "I am a skilled professional with experience in various fields."
      },
      {
        ci: "12345678",
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        zone: "City",
        phone: "555-1234",
        age: 30,
        skills: [
          { id: 1, name: "Expert" },
          { id: 2, name: "Intermediate" },
          { id: 3, name: "Advanced" }
        ],
        avgRating: 4.5,
        aboutMe: "I am a skilled professional with experience in various fields."
      }
    ],
    status: "En progreso",
    description: "Tengo la necesiadd de tener necesidades porque simplemente necesito lo necesario para necesitar necesidades necesarias, muchas gracias por este gran comentario tomas",
    creationDate: new Date("2023-06-10T10:30:00.000Z"),
    needDate: new Date("2023-06-15T12:00:00.000Z"),
    requestedSkills: [
      {
        id: 1,
        name: "Habilidad1",
      },
      {
        id: 2,
        name: "Habilidad2",
      },
    ],
    needAddress: "Dirección del objeto",
    modality: "Modalidad del objeto",
  };
  


  constructor(private needService: NeedService) { }

  ngOnInit(): void {
  }

  checkIfIsRequestor(){
    localStorage.getItem('CI') == this.need?.requestor.ci ? this.isRequestor = true : this.isRequestor = false;
  }

  //TODO: MAXI CAMBIA EL needTest por need
  isExpired(){
    const currentDate = new Date();

    if(this.needTest){
      if(currentDate > this.needTest?.needDate){
        return true;
      }
    }

    return false;
  }

  formatDate(date: Date): string {
    console.log(date)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
  
    return `${day}/${month}/${year}`;
  }

  getNeedById(id: number){
    this.needService.getNeedById(id).subscribe(
      need => {
        this.need = need;
      }
    );
  }
}
