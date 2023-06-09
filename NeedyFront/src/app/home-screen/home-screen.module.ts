import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeScreenRoutingModule } from './home-screen-routing.module';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';


@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    HomeScreenRoutingModule
  ]
})
export class HomeScreenModule { }
