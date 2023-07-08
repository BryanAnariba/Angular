import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFly'
})

export class CanFly implements PipeTransform {
  transform(value: boolean): string {
    return ( value === true ) ? 'Vuela' : 'No Vuela';
  }
}
