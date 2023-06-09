import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeedPageComponent } from './components/need-page/need-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
      path: '',
      component: NeedPageComponent,
      canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeedRoutingModule { }
