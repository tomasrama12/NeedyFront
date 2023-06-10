import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputNeedyComponent } from 'src/app/core/components/input-needy/input-needy.component';
import { InsertUser } from 'src/app/core/interfaces/insertUser';
import { Skill } from 'src/app/core/interfaces/skill';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('inputEmail', {static: true}) childInputEmail! : InputNeedyComponent;
  
  @ViewChild('inputPassword', {static: true}) childInputPassword! : InputNeedyComponent;

  @ViewChild('inputName', {static: true}) childInputFirstName! : InputNeedyComponent;

  @ViewChild('inputLastName', {static: true}) childInputLastName! : InputNeedyComponent;

  @ViewChild('inputCi', {static: true}) childInputCi! : InputNeedyComponent;
  
  @ViewChild('inputZone', {static: true}) childInputZone! : InputNeedyComponent;

  @ViewChild('inputAddress', {static: true}) childInputAddress! : InputNeedyComponent;

  @ViewChild('inputPhone', {static: true}) childInputPhone! : InputNeedyComponent;

  @ViewChild('inputGender', {static: true}) childInputGender! : InputNeedyComponent;

  @ViewChild('inputAboutMe', {static: true}) childInputAboutMe! : InputNeedyComponent;

  @ViewChild('inputBirthDate', {static: true}) childInputBirthDate! : ElementRef;


  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  ci?: string;
  zone?: string;
  address?: string;
  phone?: string;
  gender?: string;
  aboutMe?: string;
  birthDate?: Date;

  skills = [
    {"id": 1, "name": "Objeto1"},
    {"id": 2, "name": "Objeto2"},
    {"id": 3, "name": "Objeto3"},
    {"id": 4, "name": "Objeto4"},
    {"id": 5, "name": "Objeto5"},
    {"id": 6, "name": "Objeto6"},
    {"id": 7, "name": "Objeto7"},
    {"id": 8, "name": "Objeto8"},
    {"id": 9, "name": "Objeto9"},
    {"id": 10, "name": "Objeto10"},
    {"id": 11, "name": "Objeto11"},
    {"id": 12, "name": "Objeto12"},
    {"id": 13, "name": "Objeto13"},
    {"id": 14, "name": "Objeto14"},
    {"id": 15, "name": "Objeto15"},
    {"id": 16, "name": "Objeto16"},
    {"id": 17, "name": "Objeto17"},
    {"id": 18, "name": "Objeto18"},
    {"id": 19, "name": "Objeto19"}
  ]

  skillsToSignup:number[] = [];
  
  

  signUp(){
    this.email = this.childInputEmail.getText();
    this.password = this.childInputPassword.getText();
    this.firstName = this.childInputFirstName.getText();
    this.lastName = this.childInputLastName.getText();
    this.ci = this.childInputCi.getText();
    this.zone = this.childInputZone.getText();
    this.address = this.childInputAddress.getText();
    this.phone = this.childInputPhone.getText();
    this.gender = this.childInputGender.getText();
    this.aboutMe = this.childInputAboutMe.getText();
    this.birthDate = this.childInputBirthDate.nativeElement.value;
    
    const user: InsertUser = {
      ci: this.ci,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      zone: this.zone,
      address: this.address,
      phone: this.phone,
      gender: this.gender,
      aboutMe: this.aboutMe,
      birthDate: this.birthDate!,
      skillsId: this.skillsToSignup


    }
  }


  saveSkill(skill:Skill){
    if(this.skillsToSignup.includes(skill.id)){
      this.skillsToSignup.splice(this.skillsToSignup.indexOf(skill.id), 1);
    }else{
      this.skillsToSignup.push(skill.id);
    } 
  }

}
