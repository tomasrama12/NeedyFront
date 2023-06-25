import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeedCardComponent } from './components/need-card/need-card.component';
import { AlertComponent } from './components/alert/alert.component';
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent,
    AlertComponent,
    StarsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgbRatingModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    HeaderComponent,
    NavbarComponent,
    NeedCardComponent,
    StarsComponent
  ]
})
export class SharedModule { }
