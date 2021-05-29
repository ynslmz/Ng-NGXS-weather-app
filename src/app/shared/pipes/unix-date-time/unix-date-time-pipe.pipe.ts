import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'unixDateTime'
})
export class UnixDateTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return formatDate(new Date(value * 1000), 'HH:mm', 'en');
  }

}
