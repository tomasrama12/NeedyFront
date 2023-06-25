import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { StarsComponent } from './components/stars/stars.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    CardComponent,
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
    CardComponent,
    StarsComponent
  ]
})
export class SharedModule { }
