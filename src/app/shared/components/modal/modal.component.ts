import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = ""
  @Output() closeClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeClicked.emit();
  }

}
