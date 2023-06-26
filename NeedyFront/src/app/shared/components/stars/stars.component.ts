import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() avgRating!: number;
  
  constructor() { }

  ngOnInit(): void {
    if (this.avgRating === undefined) {
      this.avgRating = 0;
    }
  }

}
