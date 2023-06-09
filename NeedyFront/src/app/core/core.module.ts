import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeedyButtonComponent } from './components/needy-button/needy-button.component';
import { InputNeedyComponent } from './components/input-needy/input-needy.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [
    NeedyButtonComponent,
    InputNeedyComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NeedyButtonComponent,
    InputNeedyComponent
  ]
})
export class CoreModule { }
