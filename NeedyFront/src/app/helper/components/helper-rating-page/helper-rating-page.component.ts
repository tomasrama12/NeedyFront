import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/core/interfaces/rating';

@Component({
  selector: 'app-helper-rating-page',
  templateUrl: './helper-rating-page.component.html',
  styleUrls: ['./helper-rating-page.component.css']
})
export class HelperRatingPageComponent implements OnInit {

    //TODO: Add the user name here from parameter
    userFullName: string = 'John Doe';
    age: number = 25;
    rating: number = 3;
    description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.';

  constructor() { }

  userRatings: Rating[] = [
    {
      id: 1,
      giverCI: "12344",
      receiverCI: "2345",
      needId: 5,
      stars: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
      id: 1,
      giverCI: "12344",
      receiverCI: "2345",
      needId: 5,
      stars: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
      id: 1,
      giverCI: "12344",
      receiverCI: "2345",
      needId: 5,
      stars: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
      id: 1,
      giverCI: "12344",
      receiverCI: "2345",
      needId: 5,
      stars: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
    {
      id: 1,
      giverCI: "12344",
      receiverCI: "2345",
      needId: 5,
      stars: 3,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
    },
  ];

  ngOnInit(): void {
  }

}
