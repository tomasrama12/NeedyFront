import { Component, OnInit } from '@angular/core';

import { NeedService } from '../../services/need.service';
import { Need } from 'src/app/core/interfaces/need';

@Component({
  selector: 'app-need-page',
  templateUrl: './need-page.component.html',
  styleUrls: ['./need-page.component.css']
})
export class NeedPageComponent implements OnInit {

  needs: Need[] = [];
  need?: Need;

  constructor(private needService: NeedService) { }

  ngOnInit(): void {
  }

  getNeeds(){
    this.needService.getNeeds().subscribe(
      needs => {
        this.needs = needs;
      }
    );
  }

  getNeedById(id: number){
    this.needService.getNeedById(id).subscribe(
      need => {
        this.need = need;
      }
    );
  }
}
