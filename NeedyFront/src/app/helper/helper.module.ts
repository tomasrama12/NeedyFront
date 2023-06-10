import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { HelperRoutingModule } from './helper-routing.module';
import { HelperRatingPageComponent } from './components/helper-rating-page/helper-rating-page.component';


@NgModule({
  declarations: [
    HelperPageComponent,
    HelperRatingPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HelperRoutingModule
  ]
})
export class HelperModule { }
