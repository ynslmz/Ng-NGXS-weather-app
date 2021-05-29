import { NgModule } from '@angular/core';
import { UnixDateTimePipe } from './pipes/unix-date-time/unix-date-time-pipe.pipe';
import { TakePipe } from './pipes/take/take.pipe';

@NgModule({
  imports: [],
  exports: [UnixDateTimePipe, TakePipe],
  declarations: [
    UnixDateTimePipe,
    TakePipe
  ],
  providers: [],
})
export class SharedModule { }
