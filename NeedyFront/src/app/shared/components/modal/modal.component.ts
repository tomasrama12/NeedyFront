import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() text!: string;
  @Input() btnText!: string;
  @Output() closeModal: EventEmitter<void> = new EventEmitter();
  @Output() actionModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onActionModal() {
    this.actionModal.emit();
  }

}
