import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.scss']
})
export class NewHeroPageComponent {

  constructor ( private heroService: HeroService ) {}

  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' }
  ]

  public heroForm = new FormGroup({
    id: new FormControl<string | null>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_image: new FormControl<string >(''),
  });

  get currentHero (): Hero {
    const hero = this.heroForm.value;
    return hero as Hero;
  }

  public onSubmit(): void {
    console.log('El formulario es correcto: ', this.heroForm.valid, ', Valores:', this.heroForm.value)
    if ( this.heroForm.invalid ) {
      return;
    }
  }
}
