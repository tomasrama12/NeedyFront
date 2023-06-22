import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
