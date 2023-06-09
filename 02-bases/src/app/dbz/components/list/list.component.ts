import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Input() => Permite a un componente hijo recibir informacion de un componente padre
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 20 }];

}
