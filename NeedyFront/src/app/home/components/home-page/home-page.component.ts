import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectToSearchPage(index: number) {
    this.dataService.searchIndex = index;
    this.router.navigateByUrl('/search');
  }

}
