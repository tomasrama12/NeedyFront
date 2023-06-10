import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HelperPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HelperRoutingModule
  ]
})
export class HelperModule { }
