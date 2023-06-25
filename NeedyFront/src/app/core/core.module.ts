import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './components/error-page/error-page.component';

import { FilterNeedPipe } from './pipes/filter-need.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';


@NgModule({
  declarations: [
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
  ]
})
export class CoreModule { }
