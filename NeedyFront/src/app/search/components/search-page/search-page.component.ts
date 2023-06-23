import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  results: any[] = [];
  private searchTerm: string = '';
  selectedMenuIndex: number = 0;

  constructor(
    private needService: NeedService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.selectedMenuIndex === 0) {
      console.log(this.selectedMenuIndex);
      this.needService.getNeeds().subscribe(
        needs => {
          console.log(needs);
          this.results = needs;
        }
      );
    } else {
      console.log(this.selectedMenuIndex);
      this.userService.getUsers().subscribe(
        users => {
          console.log(users);
          this.results = users;
        }
      );
    }
  }

  selectMenu(index: number) {
    this.selectedMenuIndex = index;
  }

  search(term: string) {
    const lowerTerm = term.toLowerCase();
  }

}
