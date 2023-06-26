import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Skill } from 'src/app/core/interfaces/skill';
import { ageValidator } from 'src/app/core/validators/ageValidator';
import { SkillService } from 'src/app/helper/services/skill.service';
import { InsertUser } from 'src/app/core/interfaces/insertUser';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private skillService: SkillService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  signupForm!: FormGroup;
  errorMessage?: string;
  genders: string[] = ['Male', 'Female', 'Other'];
  zones: string[] = ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida',
    'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto',
    'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'];
  skills: Skill[] = [];
  skillsId: number[] = [];

  ngOnInit(): void {
    this.skillsId = [];
    this.skillService.getSkills().subscribe(
      skills => {
        this.skills = skills;
      }
    );

    this.signupForm = this.fb.group({
      ci: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern("^[0-9]+$")]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zone: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]+$")]),
      gender: new FormControl('', Validators.required),
      birthDate: new FormControl('', [Validators.required, ageValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      aboutMe: new FormControl('', [Validators.required, Validators.maxLength(150)]),
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

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    const user: InsertUser = {
      ci: this.signupForm.get('ci')!.value,
      firstName: this.signupForm.get('firstName')!.value,
      lastName: this.signupForm.get('lastName')!.value,
      address: this.signupForm.get('address')!.value,
      zone: this.signupForm.get('zone')!.value,
      phone: this.signupForm.get('phone')!.value,
      gender: this.signupForm.get('gender')!.value,
      birthDate: this.signupForm.get('birthDate')!.value,
      email: this.signupForm.get('email')!.value,
      password: this.signupForm.get('password')!.value,
      aboutMe: this.signupForm.get('aboutMe')!.value,
      skillsId: this.skillsId,
    };

    this.authService.signup(user).subscribe(response => {
      if (response.type) {
        this.errorMessage = response.type;
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
