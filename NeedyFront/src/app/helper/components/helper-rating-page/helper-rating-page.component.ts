import { Component, OnInit } from '@angular/core';

import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';

import { RatingService } from '../../services/rating.service';
import { UserService } from '../../services/user.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-helper-rating-page',
  templateUrl: './helper-rating-page.component.html',
  styleUrls: ['./helper-rating-page.component.css']
})
export class HelperRatingPageComponent implements OnInit {

  user!: User;
  ratings: Rating[] = [];

  constructor(
    private ratingService: RatingService,
    private userService: UserService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserByCI(this.dataService.userCI).subscribe(
      user => {
        this.user = user;

        this.ratingService.getUserRating(user.ci).subscribe(
          ratings => {
            this.ratings = ratings;

            this.ratings.forEach((rating: Rating) => {
              this.userService.getUserByCI(rating.giverCI).subscribe(
                user => {
                  rating.giver = user;
                }
              );
            });
          }
        );
      }
    );
  }

}
