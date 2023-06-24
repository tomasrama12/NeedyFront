import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InsertNeed } from 'src/app/core/interfaces/insertNeed';
import { Skill } from 'src/app/core/interfaces/skill';

import { SkillService } from 'src/app/helper/services/skill.service';
import { NeedService } from 'src/app/need/services/need.service';

@Component({
  selector: 'app-create-need',
  templateUrl: './create-need.component.html',
  styleUrls: ['./create-need.component.css']
})
export class CreateNeedComponent implements OnInit {

  constructor(
    private needService: NeedService,
    private skillService: SkillService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  needForm!: FormGroup;
  modalities: string[] = ['Remote', 'Home', 'Visit'];
  skills: Skill[] = [];
  skillsId: number[] = [];

  ngOnInit(): void {
    this.skillsId = [];
    this.skillService.getSkills().subscribe(
      skills => {
        this.skills = skills;
      }
    );

    this.needForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required]), //validar sea 7 dias mas
      modality: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(150)]),
    });
  }

  addDeleteSkillId(id: number) {
    let pos = this.skillsId.indexOf(id);

    if (pos === -1) {
      this.skillsId.push(id);
    } else {
      this.skillsId.splice(pos, 1);
    }
  }

  create() {
    if (this.needForm.invalid && this.skillsId.length > 0) {
      return;
    }

    const need: InsertNeed = {
      title: this.needForm.get('title')!.value,
      needAddress: this.needForm.get('address')!.value,
      modality: this.needForm.get('modality')!.value,
      needDate: this.needForm.get('birthDate')!.value,
      description: this.needForm.get('aboutMe')!.value,
      requestedSkills: this.skillsId,
    };

    this.needService.insertNeed(need).subscribe(response => {
      // if (response.type) {
      //   this.errorMessage = response.type;
      // } else {
      //   this.router.navigateByUrl('/profile');
      // }
    });
  }

}
