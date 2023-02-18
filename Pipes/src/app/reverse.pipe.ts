import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: unknown, filterString: string): any {
    let reversed = '';

    for (let i = filterString.length - 1; i >= 0; i--) {
      reversed += filterString[i];
    }
    return reversed;
  }

}
