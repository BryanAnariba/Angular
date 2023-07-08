import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCase implements PipeTransform {

  // LA IDEA ES UN PIPE STRING SI YO MANDO bryan = BRYAN, si yo mando BRYAN = bryan
  transform(value: string, toUpper: boolean = false ): string {
    console.log({ value, toUpper });

    return ( toUpper ) ? value.toUpperCase() : value.toLowerCase();
  }
}
