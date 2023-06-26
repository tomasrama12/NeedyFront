import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { DataService } from 'src/app/shared/services/data.service';

import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css']
})
export class HelperPageComponent implements OnInit {

  user!: User;
  isUserLogged: boolean = false;

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserByCI(this.dataService.userCI).subscribe(
      user => {
        this.user = user;
        this.checkIsLogged();
      }
    );
  }

  checkIsLogged() {
    localStorage.getItem('userCI') == this.user.ci ? this.isUserLogged = true : this.isUserLogged = false;
  }

  redirectToUserRatingsPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper/ratings');
  }

}
