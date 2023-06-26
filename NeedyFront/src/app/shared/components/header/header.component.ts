import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentText?: string;
  @Input() bgColor!: string;
  @Input() visibility!: string;
  showModal: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.showModal = false;
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  back() {
    this.location.back();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
