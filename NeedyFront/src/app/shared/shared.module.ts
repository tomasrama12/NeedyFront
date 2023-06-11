import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NeedCardComponent } from './components/need-card/need-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NeedCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NeedCardComponent
  ]
})
export class SharedModule { }
