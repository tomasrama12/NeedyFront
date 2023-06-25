import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { HelperRatingPageComponent } from './components/helper-rating-page/helper-rating-page.component';
import { HelperRoutingModule } from './helper-routing.module';


@NgModule({
  declarations: [
    HelperPageComponent,
    HelperRatingPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HelperRoutingModule,
    NgbRatingModule,
    SharedModule
  ]
})
export class HelperModule { }
