import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Need } from 'src/app/core/interfaces/need';
import { User } from 'src/app/core/interfaces/user';

import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  needs: Need[] = [];
  users: User[] = [];
  userLogged!: string;
  searchTerm: string = '';
  selectedMenuIndex!: number;

  constructor(
    private needService: NeedService,
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedMenuIndex = 0;
    this.userLogged = localStorage.getItem('userCI')!;

    if (this.dataService.searchIndex) {
      this.selectedMenuIndex = this.dataService.searchIndex;
    }

    this.needService.getNeeds().subscribe(
      needs => {
        this.needs = needs;
      }
    );

    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );

  }

  selectMenu(index: number) {
    this.selectedMenuIndex = index;
  }

  search(term: string) {
    this.searchTerm = term.toLowerCase();
  }

  redirectToNeedPage(id: number) {
    this.dataService.needId = id;
    this.router.navigateByUrl('/need');
  }

  redirectToUserPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper');
  }

}
