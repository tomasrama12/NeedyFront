import { Component, OnInit } from '@angular/core';

import { Skill } from 'src/app/core/interfaces/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css']
})
export class HelperPageComponent implements OnInit {

  //TODO: Add the user name here from parameter
  userFullName: string = 'John Doe';
  age: number = 25;
  rating: number = 3;
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.';
  // userSkills: any[] = [
  //   { skill: 'Skill 1' },
  //   { skill: 'Skill 2' },
  //   { skill: 'Skill 3' }
  //   // Add more container objects as needed
  // ];

  constructor(private skillService: SkillService) { }

  userSkills: Skill[] = [
    { id: 1, name: 'Skill 1' },
    { id: 2, name: 'Skill 2' },
    { id: 3, name: 'Skill 3' },
  ];

  ngOnInit(): void {
  }

  getSkills(){
    this.skillService.getSkills().subscribe(
      skills => {
        this.userSkills = skills;
        console.log(skills);
      }
    );
  }

}
