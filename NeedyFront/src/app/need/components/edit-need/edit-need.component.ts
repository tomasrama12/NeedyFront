import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { UpdateNeed } from 'src/app/core/interfaces/updateNeed';
import { Need } from 'src/app/core/interfaces/need';
import { Skill } from 'src/app/core/interfaces/skill';

import { SkillService } from 'src/app/helper/services/skill.service';
import { NeedService } from 'src/app/need/services/need.service';
import { DataService } from 'src/app/shared/services/data.service';
import { needDateValidator } from 'src/app/core/validators/needDateValidator';

@Component({
  selector: 'app-edit-need',
  templateUrl: './edit-need.component.html',
  styleUrls: ['./edit-need.component.css']
})
export class EditNeedComponent implements OnInit {

  constructor(
    private needService: NeedService,
    private skillService: SkillService,
    private dataService: DataService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private router: Router
  ) { }

  showAlert = false;
  need!: Need;
  needForm!: FormGroup;
  modalities: string[] = ['Remote', 'Home', 'Visit'];
  skills: Skill[] = [];
  skillsId: number[] = [];

  ngOnInit(): void {
    this.needService.getNeedById(this.dataService.needId).subscribe(
      need => {
        this.need = need;

        this.skillsId = [];
        this.skillService.getSkills().subscribe(
          skills => {
            this.skills = skills;
          }
        );        

        this.needForm = this.fb.group({
          title: new FormControl(this.need.title, [Validators.required, Validators.maxLength(20)]),
          address: new FormControl(this.need.needAddress, Validators.required),
          date: new FormControl(this.datePipe.transform(this.need.needDate, 'yyyy-MM-dd'), [Validators.required, needDateValidator()]),
          modality: new FormControl(this.need.modality, Validators.required),
          description: new FormControl(this.need.description, [Validators.required, Validators.maxLength(150)]),
        });
      }
    );
  }

  addDeleteSkillId(id: number) {
    let pos = this.skillsId.indexOf(id);

    if (pos === -1) {
      this.skillsId.push(id);
    } else {
      this.skillsId.splice(pos, 1);
    }
  }

  isSkillSelected(skillId: number): boolean {
    if (this.need && this.need.requestedSkills) {
      return this.need.requestedSkills.some(skill => skill.id === skillId);
    }
    return false;
  }

  update() {
    if (this.needForm.invalid) {
      return;
    }

    const need: UpdateNeed = {
      needId: this.need.id,
      title: this.needForm.get('title')!.value,
      needAddress: this.needForm.get('address')!.value,
      modality: this.needForm.get('modality')!.value,
      needDate: this.needForm.get('date')!.value,
      description: this.needForm.get('description')!.value,
      requestedSkillsId: this.skillsId,
    };

    this.needService.updateNeed(need).subscribe(res => {
      this.showAlert = true;

      setTimeout(() => {
        this.showAlert = false;
        this.router.navigateByUrl('/profile');
      }, 500);
    });
  }

}
