import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/core/interfaces/skill';


@Component({
  selector: 'app-skill-signup',
  templateUrl: './skill-signup.component.html',
  styleUrls: ['./skill-signup.component.css']
})
export class SkillSignupComponent implements OnInit {

  constructor() { }

  clicked:boolean = false;


  ngOnInit(): void {
  }
  
  @Input() skill!: Skill;

  @Output() btnClicked = new EventEmitter<Skill>();

  changeButton(){
    this.btnClicked.emit(this.skill);
    this.clicked = !this.clicked;
  }

  getBgColor(){
    if(this.clicked){
      return '#0A2472'
    }else{
      return '#CDCDCD'
    }
  }

  getTextColor(){
    if(this.clicked){
      return 'white'
    }else{
      return 'black'
    }
  }

}
