import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingComponent } from './components/rating/rating.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingRoutingModule { }
