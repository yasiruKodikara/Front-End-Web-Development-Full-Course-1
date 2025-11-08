import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure1'
})
export class Impure1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
