import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
      path: '',
      component: PresentationPageComponent,
      data: { animation: 'Presentation' }
  },
  {
      path: 'login',
      component: LoginPageComponent,
      data: { animation: 'Login' }
  }, 
  {
      path: 'singUp',
      component: SignUpPageComponent,
      data: { animation: 'SingUp' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
