import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedyButtonComponent } from './components/needy-button/needy-button.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { FilterNeedPipe } from './pipes/filter-need.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';


@NgModule({
  declarations: [
    NeedyButtonComponent,
    ErrorPageComponent,
    FilterNeedPipe,
    FilterUserPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterNeedPipe,
    FilterUserPipe,
    NeedyButtonComponent
  ]
})
export class CoreModule { }
