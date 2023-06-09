import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelperPageComponent } from './components/helper-page/helper-page.component';

const routes: Routes = [
  {
      path: '',
      component: HelperPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
