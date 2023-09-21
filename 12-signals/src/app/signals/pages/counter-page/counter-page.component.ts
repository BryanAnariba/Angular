import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {
  public counter = signal<number>(10);
  public squareCounter = computed(() => this.counter() * this.counter()); // Computed: propiedad solo lectura en este caso solo deseo saber el cuadrado del numero

  public increaseBy( value: number ): void {
    this.counter.update( current => current + value );
  }

  public decreaseBy( value: number ): void {
    this.counter.update( current => current - value );
  }
}
