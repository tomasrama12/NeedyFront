import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { HelperPageComponent } from './components/helper-page/helper-page.component';


@NgModule({
  declarations: [
    HelperPageComponent
  ],
  imports: [
    CommonModule,
    HelperRoutingModule
  ]
})
export class HelperModule { }
