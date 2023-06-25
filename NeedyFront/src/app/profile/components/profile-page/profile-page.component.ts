import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Need } from 'src/app/core/interfaces/need';
import { User } from 'src/app/core/interfaces/user';

import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private needService: NeedService,
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  user!: User;
  myApplies: Need[] = [];
  myNeeds: Need[] = [];
  selectedMenuIndex: number = 0;

  ngOnInit(): void {
    this.userService.getUserByCI(localStorage.getItem('userCI')!).subscribe(
      user => {
        this.user = user;
        
        this.needService.getUserCreatedNeeds(user.ci).subscribe(
          needs => {
            this.myNeeds = needs;
          }
        );
    
        this.needService.getUserAppliedNeeds(user.ci).subscribe(
          needs => {
            this.myApplies = needs;
          }
        );
      }
    );
  }

  selectMenu(index:number){
    this.selectedMenuIndex = index;
  }

  redirectToNeedPage(id: number){
    this.dataService.needId = id;
    this.router.navigateByUrl('/need');
  }

  redirectToCreateNeedPage(){
    this.router.navigateByUrl('/profile/create-need');
  }

}
