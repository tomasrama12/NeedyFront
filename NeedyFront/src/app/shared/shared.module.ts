import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeedCardComponent } from './components/need-card/need-card.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent
  ]
})
export class SharedModule { }
