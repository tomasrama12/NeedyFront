import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelperPageComponent } from './components/helper-page/helper-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
      path: '',
      component: HelperPageComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
