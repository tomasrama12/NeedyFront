import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-helper-rating-page',
  templateUrl: './helper-rating-page.component.html',
  styleUrls: ['./helper-rating-page.component.css']
})
export class HelperRatingPageComponent implements OnInit {

  user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
