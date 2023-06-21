import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  @Input() name!: String;
  @Input() lastName!: String;
  @Input() avgRating!: number;

  constructor() { }

  ngOnInit(): void {
  }

  showHalfStar(){
    if(this.avgRating == undefined)
    {
      return false;
    }
    if(this.avgRating % 1 != 0){
      return true;
    }
    return false;
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }

  getRatingFloor(){
    if(this.avgRating == undefined)
    {
      return 0;
    }
    return this.avgRating - (this.avgRating % 1);
  }

}
