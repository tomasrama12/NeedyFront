import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RatingService } from 'src/app/helper/services/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  //TODO: Add the user name here from parameter
  receiverName: string = 'John Doe';
  rating: number = 3; // Example rating value
  ratingForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ratingService: RatingService
  ) { }

  ngOnInit(): void {
    this.ratingForm = this.fb.group({
      comment: new FormControl('', Validators.required),
    });
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  giveRating() {
    //TODO: Add the logic here
   }

}
