import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SkillSignupComponent } from './components/skill-signup/skill-signup.component';


@NgModule({
  declarations: [
    PresentationPageComponent,
    SignUpPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    SignupFormComponent,
    SkillSignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
