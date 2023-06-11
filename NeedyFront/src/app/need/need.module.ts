import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedRoutingModule } from './need-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    NeedRoutingModule
  ]
})
export class NeedModule { }
