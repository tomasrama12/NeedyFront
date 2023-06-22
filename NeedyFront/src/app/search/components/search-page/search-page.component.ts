import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchTerm: string = '';
  selectedMenuIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(index:number){
    this.selectedMenuIndex = index;
  }

  searchInfo() {
    
  }

}
