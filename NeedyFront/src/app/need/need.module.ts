import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedRoutingModule } from './need-routing.module';
import { AppliersPageComponent } from './components/appliers-page/appliers-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AppliersPageComponent
  ],
  imports: [
    CommonModule,
    NeedRoutingModule,
    SharedModule
  ]
})
export class NeedModule { }
