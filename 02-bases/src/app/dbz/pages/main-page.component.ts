import { Component } from '@angular/core';
import { Character } from '../interfaces/Character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    public characters: Character[] =  [
      {
        name: 'Krillin',
        power: 1000
      },
      {
        name: 'Kakaroto',
        power: 9500
      },
      {
        name: 'Vegetta',
        power: 7500
      },
      {
        name: 'Trunks',
        power: 75000
      }
    ];
    constructor() { }

    onNewCharacter(character: Character): void {
      console.log('app-dbz-main-page => informacion recibida por el padre del hijo: ', character)
      this.characters = [ character, ...this.characters ];
    }

    onDeleteId(index: number): void {
      console.log('app-dbz-main-page => informacion recibida por el padre del hijo: ', {index});
      this.characters.splice(index, 1);
    }
}
