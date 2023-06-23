import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public criterioBusqueda = new EventEmitter<string>();

  public onValue ( value: string ): void {
    console.log('search-box.component.ts manda a by-capital-page.component.ts: ', { value });
    this.criterioBusqueda.emit(value);
  }
}
