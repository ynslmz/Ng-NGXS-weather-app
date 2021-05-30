import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    if (Array.isArray(value)) {
      let take = value.length > Number(args[0]) ? Number(args[0]) : undefined;
      return value.slice(0, take);
    }
    throw Error('Take pipe is only for arrays!')
  }
}
