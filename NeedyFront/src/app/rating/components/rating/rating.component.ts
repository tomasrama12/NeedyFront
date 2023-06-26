import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InsertRating } from 'src/app/core/interfaces/insertRating';
import { Need } from 'src/app/core/interfaces/need';

import { RatingService } from 'src/app/helper/services/rating.service';
import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  showAlert: boolean = false;
  ratingForm!: FormGroup;
  need!: Need;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ratingService: RatingService,
    private needService: NeedService,
    private userService: UserService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.needService.getNeedById(this.dataService.needId!).subscribe(
      need => {
        this.need = need;
        this.userService.getUserByCI(need.acceptedApplier.ci).subscribe(
          user => {
            this.need.acceptedApplier = user;
          }
        );
      }
    );

    this.ratingForm = this.fb.group({
      comment: new FormControl('', Validators.required),
      stars: new FormControl('', Validators.required),
    });
  }

  giveRating() {
    if (this.ratingForm.invalid) {
      return;
    }
    const rating: InsertRating = {
      needId: this.need.id,
      receiverCI: this.need.acceptedApplier!.ci,
      stars: this.ratingForm.get('stars')!.value,
      comment: this.ratingForm.get('comment')!.value,
    };
    console.log(rating);

    this.ratingService.insertNRating(rating).subscribe(response => {
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
        this.router.navigateByUrl('/profile');
      }, 500);
    });
  }

}
