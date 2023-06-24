import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Need } from 'src/app/core/interfaces/need';
import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';

import { DataService } from '../../services/data.service';
import { UserService } from 'src/app/helper/services/user.service';

@Component({
  selector: 'app-need-card',
  templateUrl: './need-card.component.html',
  styleUrls: ['./need-card.component.css']
})
export class NeedCardComponent implements OnInit {

  @Input() need!:Need;
  @Input() user!:User;
  @Input() rating!:Rating;
  @Input() type!: string;

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.user) {
      this.userService.getUserByCI(this.user.ci).subscribe(
      user => {
        this.user = user;
      }
    );
    }
  }

  acceptApplier(ci: string) {
    console.log('aceptado', ci, this.need.id);
  }

  declineApplier(ci: string) {
    console.log('declinado', ci, this.need.id);
  }

  redirectToUserPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper');
  }

}
