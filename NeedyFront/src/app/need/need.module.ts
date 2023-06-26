import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NeedRoutingModule } from './need-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { AppliersPageComponent } from './components/appliers-page/appliers-page.component';
import { EditNeedComponent } from './components/edit-need/edit-need.component';


@NgModule({
  declarations: [
    AppliersPageComponent,
    EditNeedComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    SharedModule,
    NeedRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class NeedModule { }
