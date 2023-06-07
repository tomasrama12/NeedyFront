import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],

  imports: [
    CommonModule,
    LoginRoutingModule,
    CoreModule
  ]
})
export class LoginModule { }
