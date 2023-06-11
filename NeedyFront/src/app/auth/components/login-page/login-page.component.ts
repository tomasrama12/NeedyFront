import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import { Login } from 'src/app/core/interfaces/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router
  ) { }

  loginForm!: FormGroup;
  errorMessage?: string;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login(){
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(response => {
      if (response.type) {
        this.errorMessage = response.type;
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }

}
