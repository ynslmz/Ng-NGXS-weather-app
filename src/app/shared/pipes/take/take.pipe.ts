import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    if (Array.isArray(value)) {
      return value.slice(0, args[0]);
    }
    throw Error('Take pipe is only for arrays!')
  }
}
