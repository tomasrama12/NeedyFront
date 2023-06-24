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

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserByCI(this.dataService.userCI).subscribe(
      user => {
        this.user = user;
        this.setUserImageSrc(user.ci);
      }
    );
  }

  redirectToUserRatingsPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper/ratings');
  }

  setUserImageSrc(userCI: string) {
    const dictionary = this.userService.pictures.find(d => d.ci === userCI);

    if (dictionary) {
      this.user.imageSrc = dictionary.src;
    }
  }

}
