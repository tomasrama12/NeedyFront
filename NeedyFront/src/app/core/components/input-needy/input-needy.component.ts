import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-needy',
  templateUrl: './input-needy.component.html',
  styleUrls: ['./input-needy.component.css']
})
export class InputNeedyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() placeHolder!: String;
  @Input() labelTop!: String;

  @ViewChild('input') inputElement!: ElementRef;


  getText(): string{
    return this.inputElement.nativeElement.value;
  }



}
