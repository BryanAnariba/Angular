import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeHolder: string = '';

  @Output()
  public criterioBusqueda = new EventEmitter<string>();

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer // 300 miliseg despues de que el usuario deje de teclear se lanza el valor y se hace la busqueda
      .pipe(
        debounceTime(300) 
      )
      .subscribe(value => {
        //console.log('Debouncer search-box.component.ts manda a by-capital-page.component.ts: ', { value });
        this.criterioBusqueda.emit(value);
      });
  }

  ngOnDestroy(): void {
    console.log('Componente destruido, se llamo otro componente')
    this.debouncerSuscription?.unsubscribe();
  }

  // public onValue ( value: string ): void { // enter
  //   console.log('search-box.component.ts manda a by-capital-page.component.ts: ', { value });
  //   this.criterioBusqueda.emit(value);
  // }

  public onValue ( value: string ): void { // key press aqui empieza el debounce
    // CADA VES QUE TECLEA LLAMA AL DEBOUNCER
    this.debouncer.next(value);
  }
}
