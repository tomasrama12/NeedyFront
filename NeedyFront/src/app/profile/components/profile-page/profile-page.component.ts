import { Component, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  user: User = {
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

  //Necesario para las que publique
  needs:Need[] = [
    {
      id:1,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:2,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:3,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:4,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:5,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },{
      id:6,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:7,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" },
        { id: 3, name: "Advanced" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    }
  ]

  //Necesario para las que aplique
  myNeedysApplied:Need[] = [
    {
      id:1,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 1, name: "Expert" },
        { id: 2, name: "Intermediate" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    },
    {
      id:2,
      requestor: this.user,
      appliers: [],
      status: "Open",
      description: "I need help with my homework",
      creationDate: new Date(),
      needDate: new Date(),
      requestedSkills: [
        { id: 2, name: "Intermediate" }
      ],
      needAddress: "123 Main St",
      modality: "In Person"
    }
  ]


  ngOnInit(): void {
  }

  selectedMenuIndex:number = 0;

  //Funcion para cambiar de menu
  selectMenu(index:number){
    console.log(index);
    this.selectedMenuIndex = index;
  }

  getSkillsString(){
    return this.user.skills.map(skill => skill.name).join(", ");
  }

}
