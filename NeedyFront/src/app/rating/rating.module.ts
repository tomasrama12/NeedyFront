import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RatingComponent } from './components/rating/rating.component';
import { RatingRoutingModule } from './rating-routing.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    RatingRoutingModule,
    CoreModule,
    NgbRatingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RatingModule { }
