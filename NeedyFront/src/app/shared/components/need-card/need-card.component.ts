import { Component, Input, OnInit } from '@angular/core';
import { Need } from 'src/app/core/interfaces/need';

@Component({
  selector: 'app-need-card',
  templateUrl: './need-card.component.html',
  styleUrls: ['./need-card.component.css']
})
export class NeedCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.check();
  }

  @Input() need!:Need;

  needSkillsNames:string = "";

  check(){
    if(this.need.requestedSkills != null){

      this.needSkillsNames = this.need!.requestedSkills!.map(skill => skill.name).join(", ");
    
      }
  }

  formatDate(date: Date): string {
    console.log(date)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
  
    return `${day}/${month}/${year}`;
  }
  
}
