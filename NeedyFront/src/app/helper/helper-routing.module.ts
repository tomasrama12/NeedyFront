import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';

import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { HelperRatingPageComponent } from './components/helper-rating-page/helper-rating-page.component';

const routes: Routes = [
  {
    path: '',
    component: HelperPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ratings',
    component: HelperRatingPageComponent,
    canActivate: [AuthGuard]
}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
