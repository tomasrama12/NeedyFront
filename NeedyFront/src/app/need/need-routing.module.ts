import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

import { NeedPageComponent } from './components/need-page/need-page.component';
import { AppliersPageComponent } from './components/appliers-page/appliers-page.component';
import { EditNeedComponent } from './components/edit-need/edit-need.component';

const routes: Routes = [
  {
    path: '',
    component: NeedPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'appliers',
    component: AppliersPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-need',
    component: EditNeedComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeedRoutingModule { }
