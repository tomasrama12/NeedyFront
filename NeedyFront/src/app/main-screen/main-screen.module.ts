import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { MainScreenRoutingModule } from './main-screen-routing.module';



@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MainScreenRoutingModule
  ]
})
export class MainScreenModule { }
