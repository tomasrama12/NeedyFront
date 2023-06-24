import { Component, OnInit } from '@angular/core';

import { NeedService } from '../../services/need.service';

import { Need } from 'src/app/core/interfaces/need';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-appliers-page',
  templateUrl: './appliers-page.component.html',
  styleUrls: ['./appliers-page.component.css']
})
export class AppliersPageComponent implements OnInit {

  need!: Need;

  constructor(
    private needService: NeedService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.needService.getNeedById(this.dataService.needId!).subscribe(
      need => {
        this.need = need;
      }
    );
  }

}
