import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConerterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Price ${value}`;
  }

}
