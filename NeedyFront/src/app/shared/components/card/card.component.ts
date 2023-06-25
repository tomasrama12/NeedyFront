import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Need } from 'src/app/core/interfaces/need';
import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';
import { ManageApplier } from 'src/app/core/interfaces/manageApplier';

import { DataService } from '../../services/data.service';
import { UserService } from 'src/app/helper/services/user.service';
import { NeedService } from 'src/app/need/services/need.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() need!:Need;
  @Input() user!:User;
  @Input() rating!:Rating;
  @Input() type!: string;

  constructor(
    private needService: NeedService,
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
    const info: ManageApplier = {
      needId: this.need.id,
      applierCI: ci,
    };
    this.needService.acceptApplier(info).subscribe(response => {
      this.dataService.needId = this.need.id;
      this.router.navigateByUrl('/need');
    });
  }

  declineApplier(ci: string) {
    const info: ManageApplier = {
      needId: this.need.id,
      applierCI: ci,
    };
    this.needService.declineApplier(info).subscribe(response => {
      
    });
  }

  redirectToUserPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper');
  }

}
