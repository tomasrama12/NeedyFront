import { Component, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-appliers-page',
  templateUrl: './appliers-page.component.html',
  styleUrls: ['./appliers-page.component.css']
})
export class AppliersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    appliers: User[] = [
    {
      ci: "123456789",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      zone: "City",
      phone: "555-1234",
      age: 30,
      skills: [
          { name: "Programming", id: 5 },
          { name: "Design", id: 3 },
          { name: "Communication", id: 4 }
      ],
      avgRating: 4.5,
      aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
    },
    {
    ci: "123456789",
    firstName: "Maximiliano",
    lastName: "Benitez",
    address: "123 Main St",
    zone: "City",
    phone: "555-1234",
    age: 30,
    skills: [
        { name: "Programming", id: 5 },
        { name: "Design", id: 3 },
        { name: "Communication", id: 4 }
    ],
    avgRating: 5,
    aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
    },
    {
    ci: "123456789",
    firstName: "Carol",
    lastName: "Glass",
    address: "123 Main St",
    zone: "City",
    phone: "555-1234",
    age: 30,
    skills: [
        { name: "Programming", id: 5 },
        { name: "Design", id: 3 },
        { name: "Communication", id: 4 }
    ],
    avgRating: 3.8,
    aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
    },
    {
      ci: "123456789",
      firstName: "Juan",
      lastName: "Mandala",
      address: "123 Main St",
      zone: "City",
      phone: "555-1234",
      age: 30,
      skills: [
          { name: "Programming", id: 5 },
          { name: "Design", id: 3 },
          { name: "Communication", id: 4 }
      ],
      avgRating: 0.8,
      aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
      },
      {
        ci: "123456789",
        firstName: "Agustin",
        lastName: "Lienzo",
        address: "123 Main St",
        zone: "City",
        phone: "555-1234",
        age: 30,
        skills: [
            { name: "Programming", id: 5 },
            { name: "Design", id: 3 },
            { name: "Communication", id: 4 }
        ],
        avgRating: 2.3,
        aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
        },
        {
          ci: "123456789",
          firstName: "Guilhermo",
          lastName: "Feheira",
          address: "123 Main St",
          zone: "City",
          phone: "555-1234",
          age: 30,
          skills: [
              { name: "Programming", id: 5 },
              { name: "Design", id: 3 },
              { name: "Communication", id: 4 }
          ],
          avgRating: 4.9,
          aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
          },
          {
            ci: "123456789",
            firstName: "Matias",
            lastName: "Delegado",
            address: "123 Main St",
            zone: "City",
            phone: "555-1234",
            age: 30,
            skills: [
                { name: "Programming", id: 5 },
                { name: "Design", id: 3 },
                { name: "Communication", id: 4 }
            ],
            avgRating: 1.2,
            aboutMe: "I'm a software developer with a passion for creating efficient and user-friendly applications."
            }
  ];

  need: Need = {
    id: 1,
    requestor: this.appliers[0],
    appliers: [this.appliers[1], this.appliers[2], this.appliers[3], this.appliers[4], this.appliers[5], this.appliers[6]],
    status: "Open",
    description: "Looking for a web developer to build a responsive website.",
    creationDate: new Date(),
    needDate: new Date("2023-07-15"),
    requestedSkills: [
        { name: "Programming", id: 5 }
    ],
    needAddress: "789 Elm St",
    modality: "Remote"
};

}
