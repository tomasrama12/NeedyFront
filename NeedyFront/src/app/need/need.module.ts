import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedRoutingModule } from './need-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AppliersPageComponent } from './components/appliers-page/appliers-page.component';


@NgModule({
  declarations: [
    AppliersPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    NeedRoutingModule
  ]
})
export class NeedModule { }
