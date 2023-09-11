import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public isProdcutVisible: boolean = false;
  public currentPrice: number  = 10;
  // Se llama antes de cualquier ciclo de vida
  constructor () {

  }

  // Se ejecuta despues del constructor
  ngOnInit(): void {
    console.log( `Componente Padre, ngOnInit` );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CComponente Padre, ambios realizados: ', changes);
    console.log(`nComponente Padre, gOnChanges`);
    
  }
  ngDoCheck(): void {
    console.log( `Componente Padre, ngDoCheck` );
  }
  ngAfterContentInit(): void {
    console.log( `Componente Padre, ngAfterContentInit` );
  }
  ngAfterContentChecked(): void {
    console.log( `Componente Padre, ngAfterContentChecked` );
  }
  ngAfterViewInit(): void {
    console.log( `Componente Padre, ngAfterViewInit` );
  }
  ngAfterViewChecked(): void {
    console.log( `Componente Padre, ngAfterViewChecked` );
  }
  ngOnDestroy(): void {
    console.log( `Componente Padre, ngOnDestroy` );
  }
  increasePrice() {
    this.currentPrice ++
  }
}
