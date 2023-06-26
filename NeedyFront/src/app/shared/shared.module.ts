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
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    NavbarComponent,
    StarsComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgbRatingModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    ModalComponent,
    NavbarComponent,
    StarsComponent
  ]
})
export class SharedModule { }
