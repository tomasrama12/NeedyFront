import { Component, OnInit, ViewChild } from '@angular/core';

import { InputNeedyComponent } from 'src/app/core/components/input-needy/input-needy.component';
import { AuthService } from '../../services/auth.service';
import { Login } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  @ViewChild('inputEmail', {static: true}) childInputEmail! : InputNeedyComponent;
  
  @ViewChild('inputPassword', {static: true}) childInputPassword! : InputNeedyComponent;

  email?: string;
  password?: string;

  getData(){
    this.email = this.childInputEmail.getText();
    this.password = this.childInputPassword.getText();
    const loginInfo: Login = {
      email: this.email,
      password: this.password
    }
    this.authService.login(loginInfo).subscribe(response => console.log(response));
  }
}
