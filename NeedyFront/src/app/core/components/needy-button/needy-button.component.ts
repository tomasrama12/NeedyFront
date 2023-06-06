import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-needy-button',
  templateUrl: './needy-button.component.html',
  styleUrls: ['./needy-button.component.css']
})
export class NeedyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text!: string;
  @Input() bgColor!: string;


}
