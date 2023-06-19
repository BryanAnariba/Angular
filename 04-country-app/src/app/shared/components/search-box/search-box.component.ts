import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  searchByCapital ( value: string ): void {
    console.log('El hijo search-box manda la informacion escrita en el input para afuera: ', {value});
    this.onValue.emit( value );
  }

}
