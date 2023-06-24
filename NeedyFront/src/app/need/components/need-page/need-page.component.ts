import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NeedService } from '../../services/need.service';
import { DataService } from 'src/app/shared/services/data.service';

import { Need } from 'src/app/core/interfaces/need';

@Component({
  selector: 'app-need-page',
  templateUrl: './need-page.component.html',
  styleUrls: ['./need-page.component.css']
})
export class NeedPageComponent implements OnInit {

  need!: Need;
  isRequestor: boolean = false;
  isApplied: boolean = false;
  errorMessage?: string;

  constructor(
    private needService: NeedService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.needService.getNeedById(this.dataService.needId).subscribe(
      need => {
        this.need = need;
        this.checkIsRequestor();
        this.checkIsApplied();
        this.dataService.userCI = need.requestor.ci;
      }
    );
  }

  checkIsRequestor() {
    localStorage.getItem('userCI') == this.need?.requestor.ci ? this.isRequestor = true : this.isRequestor = false;
  }

  checkIsApplied() {
    this.need.appliers.some((user) => user.ci === localStorage.getItem('userCI')) ? this.isApplied = true : this.isApplied = false;
  }

  isExpired() {
    const currentDate = new Date();

    if (this.need) {
      if (currentDate > this.need?.needDate) {
        return true;
      }
    }
    return false;
  }

  updateNeedy() {
    //TODO
  }

  deleteNeedy() {
    this.needService.deleteNeed(this.need.id).subscribe(
      res => {
        this.router.navigateByUrl('/profile');
      }
    );
  }

  applyNeed() {
    this.needService.applyNeed(this.need.id).subscribe(response => {
      if (response.type) {
        this.errorMessage = response.type;
      } else {
        this.isApplied = true;
      }
    });
  }

  unapplyNeed() {
    this.needService.unapplyNeed(this.need.id).subscribe(
      res => {
        this.isApplied = false;
      }
    );
  }

  redirectToRatingPage() {
    this.router.navigateByUrl('/rating');
  }

  redirectToAppliersPage(id: number) {
    this.dataService.needId = id;
    this.router.navigateByUrl('/need/appliers');
  }

  redirectToUserPage(ci: string) {
    this.dataService.userCI = ci;
    this.router.navigateByUrl('/helper');
  }

  reload(id: number) {
    this.dataService.needId = id;
    this.router.navigateByUrl('/need');
  }

}
