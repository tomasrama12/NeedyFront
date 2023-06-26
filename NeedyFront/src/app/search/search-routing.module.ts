import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
      path: '',
      component: SearchPageComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
