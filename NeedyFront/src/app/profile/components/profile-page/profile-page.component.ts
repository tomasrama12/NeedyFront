import { Component, OnInit } from '@angular/core';

import { Need } from 'src/app/core/interfaces/need';
import { User } from 'src/app/core/interfaces/user';

import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private needService: NeedService,
    private userService: UserService
  ) { }

  user!: User;
  myApplies: Need[] = [];
  myNeeds: Need[] = [];

  ngOnInit(): void {
    this.userService.getUserByCI('1234567').subscribe(
      user => {
        console.log(user);
        
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

  selectedMenuIndex:number = 0;

  //Funcion para cambiar de menu
  selectMenu(index:number){
    console.log(index);
    this.selectedMenuIndex = index;
  }

}
