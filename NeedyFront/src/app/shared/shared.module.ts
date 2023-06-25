import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeedCardComponent } from './components/need-card/need-card.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent
  ]
})
export class SharedModule { }
