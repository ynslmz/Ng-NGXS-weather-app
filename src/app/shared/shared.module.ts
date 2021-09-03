import { NgModule } from '@angular/core';
import { UnixDateTimePipe } from './pipes/unix-date-time/unix-date-time-pipe.pipe';
import { TakePipe } from './pipes/take/take.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [
    UnixDateTimePipe,
    TakePipe,
    ModalComponent
  ],
  declarations: [
    UnixDateTimePipe,
    TakePipe,
    ModalComponent
  ],
  providers: [],
})
export class SharedModule { }
