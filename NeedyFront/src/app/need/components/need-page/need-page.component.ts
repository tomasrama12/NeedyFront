import { Component, OnInit } from '@angular/core';

import { Need } from 'src/app/core/interfaces/need';
import { NeedService } from '../../services/need.service';

@Component({
  selector: 'app-need-page',
  templateUrl: './need-page.component.html',
  styleUrls: ['./need-page.component.css']
})
export class NeedPageComponent implements OnInit {

  need?: Need;

  //TODO: cuidado aca, fijate que este bien el metodo de abajo xd
  isRequestor: boolean = false;

  //TODO: MAXI CAMBIA EL needTest por need cuando pruebes con los datos reales// CAMBIALO EN EL HTML TMB

  constructor(private needService: NeedService) { }

  ngOnInit(): void {
  }

  checkIfIsRequestor(){
    localStorage.getItem('CI') == this.need?.requestor.ci ? this.isRequestor = true : this.isRequestor = false;
  }

  //TODO: MAXI CAMBIA EL needTest por need
  // isExpired(){
  //   const currentDate = new Date();

  //   if(this.needTest){
  //     if(currentDate > this.needTest?.needDate){
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  // formatDate(date: Date): string {
  //   console.log(date)
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear().toString().slice(-2);
  
  //   return `${day}/${month}/${year}`;
  // }

  // getNeedById(id: number){
  //   this.needService.getNeedById(id).subscribe(
  //     need => {
  //       this.need = need;
  //     }
  //   );
  // }
}
