import { Component, OnInit } from '@angular/core';

import { NeedService } from '../../services/need.service';

import { Need } from 'src/app/core/interfaces/need';

@Component({
  selector: 'app-appliers-page',
  templateUrl: './appliers-page.component.html',
  styleUrls: ['./appliers-page.component.css']
})
export class AppliersPageComponent implements OnInit {

  need!: Need;

  constructor(private needService: NeedService) { }

  ngOnInit(): void {
    this.needService.getNeedById(8).subscribe(
      need => {
        this.need = need;
      }
    );
  }

}
