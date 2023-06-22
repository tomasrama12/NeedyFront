import { Component, Input, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';
import { Rating } from 'src/app/core/interfaces/rating';
import { User } from 'src/app/core/interfaces/user';

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

  constructor() { }

  ngOnInit(): void {
  }

}
