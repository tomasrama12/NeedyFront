import { Component, OnInit } from '@angular/core';

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

  constructor(
    private needService: NeedService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.needService.getNeedById(this.dataService.needId).subscribe(
      need => {
        this.need = need;
        this.checkIsRequestor();
        this.checkIsApplied();
      }
    );
  }

  checkIsRequestor() {
    localStorage.getItem('CI') == this.need?.requestor.ci ? this.isRequestor = true : this.isRequestor = false;
  }

  //TODO: funcion para chequear si el usuario ya esta aplicado a la need para poner el boton unapply
  checkIsApplied() {
    //TODO
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

  applyNeed() {
    //TODO
  }

  unapplyNeed() {
    //TODO
  }

  redirectToRatingPage() {
    //TODO
  }

  redirectToAppliersPage() {
    //TODO
  }

}
