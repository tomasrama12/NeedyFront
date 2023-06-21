import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NeedCardComponent } from './components/need-card/need-card.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent,
    UserPreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    NeedCardComponent,
    UserPreviewComponent
  ]
})
export class SharedModule { }
