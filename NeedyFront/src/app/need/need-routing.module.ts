import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeedPageComponent } from './components/need-page/need-page.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AppliersPageComponent } from './components/appliers-page/appliers-page.component';

const routes: Routes = [
  {
      path: '',
      component: NeedPageComponent,
      //canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: AppliersPageComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeedRoutingModule { }
