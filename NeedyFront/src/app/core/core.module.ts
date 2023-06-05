import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NeedyButtonComponent } from './components/needy-button/needy-button.component';


@NgModule({
  declarations: [
    NeedyButtonComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
