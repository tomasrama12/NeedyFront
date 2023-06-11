import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
      path: '',
      component: PresentationPageComponent
  },
  {
      path: 'login',
      component: LoginPageComponent
  }, 
  {
      path: 'signup',
      component: SignUpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
