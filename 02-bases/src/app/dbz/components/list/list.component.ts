import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  // @Input() => Permite a un componente hijo recibir informacion de un componente padre
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 20 }];

  // TODO: Emitir el Id del personaje
  onDeleteCharacter(index: number): void {
    console.log('dbz-list enviando el index del hijo al padre: ', { index });
    this.onDeleteId.emit(index);
  }
}
