import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SkillSignupComponent } from './components/skill-signup/skill-signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PresentationPageComponent,
    SignUpPageComponent,
    LoginPageComponent,
    SkillSignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
