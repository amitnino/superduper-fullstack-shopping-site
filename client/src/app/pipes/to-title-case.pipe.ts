import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitleCase'
})
export class ToTitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    if (!value) {
      return null;
    };

    const newString = value.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')

    return newString;
  }

}
