import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedyButtonComponent } from './components/needy-button/needy-button.component';
import { combineLatest } from 'rxjs';


@NgModule({
  declarations: [
    NeedyButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NeedyButtonComponent
  ]
})
export class CoreModule { }
