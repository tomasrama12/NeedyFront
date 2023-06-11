import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CreateNeedComponent } from './components/create-need/create-need.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    CreateNeedComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class ProfileModule { }
