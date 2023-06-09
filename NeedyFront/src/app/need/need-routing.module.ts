import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeedPageComponent } from './components/need-page/need-page.component';

const routes: Routes = [
  {
      path: '',
      component: NeedPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeedRoutingModule { }
