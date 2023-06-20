import { Component, Input, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';

@Component({
  selector: 'app-need-card',
  templateUrl: './need-card.component.html',
  styleUrls: ['./need-card.component.css']
})
export class NeedCardComponent implements OnInit {

  @Input() need!:Need;

  constructor() { }

  ngOnInit(): void {
  }

}
