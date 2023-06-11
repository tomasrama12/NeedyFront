import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateNeedComponent } from './components/create-need/create-need.component';

const routes: Routes = [
  {
      path: '',
      component: ProfilePageComponent,
      //canActivate: [AuthGuard]
  },
  {
    path: 'create-need',
    component: CreateNeedComponent,
    //canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
