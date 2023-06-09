import { Component, OnInit } from '@angular/core';

import { SkillService } from '../../services/skill.service';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.css']
})
export class HelperPageComponent implements OnInit {

  constructor(private skillService: SkillService) { }

  skills: Skill[] = [];

  ngOnInit(): void {
  }

  getSkills(){
    this.skillService.getSkills().subscribe(
      skills => {
        this.skills = skills;
        console.log(skills);
      }
    );
  }

}
