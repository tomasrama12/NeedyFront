import { Component, Input, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';
import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

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
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
