import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { InputNeedyComponent } from 'src/app/core/components/input-needy/input-needy.component';
import { AuthService } from '../../services/auth.service';
import { Login } from 'src/app/core/interfaces/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  email?: string;
  password?: string;
  errorMessage?: string;

  ngOnInit(): void {
  }

  @ViewChild('inputEmail', {static: true}) childInputEmail! : InputNeedyComponent;
  @ViewChild('inputPassword', {static: true}) childInputPassword! : InputNeedyComponent;

  login(){
    this.email = this.childInputEmail.getText();
    this.password = this.childInputPassword.getText();
    const loginInfo: Login = {
      email: this.email,
      password: this.password
    }
    this.authService.login(loginInfo).subscribe(response => {
      if (response.type) {
        this.errorMessage = response.type;
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
