import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InsertNeed } from 'src/app/core/interfaces/insertNeed';
import { Skill } from 'src/app/core/interfaces/skill';

import { SkillService } from 'src/app/helper/services/skill.service';
import { NeedService } from 'src/app/need/services/need.service';
import { needDateValidator } from 'src/app/core/validators/needDateValidator';

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

  showAlert = false;
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
      date: new FormControl('', [Validators.required, needDateValidator()]),
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
    if (this.needForm.invalid) {
      return;
    }

    const need: InsertNeed = {
      title: this.needForm.get('title')!.value,
      needAddress: this.needForm.get('address')!.value,
      modality: this.needForm.get('modality')!.value,
      needDate: this.needForm.get('date')!.value,
      description: this.needForm.get('description')!.value,
      requestedSkillsId: this.skillsId,
    };

    this.needService.insertNeed(need).subscribe(res => {
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
        this.router.navigateByUrl('/profile');
      }, 500);
    });
  }

}
