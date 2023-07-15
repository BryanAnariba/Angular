import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-serach-page',
  templateUrl: './serach-page.component.html',
  styleUrls: ['./serach-page.component.css']
})
export class SerachPageComponent {
  public heroes: Hero[] = [];
  public selectedHero?: Hero;
  public searchInput = new FormControl('');

  constructor (
    private heroService: HeroService
  ) {}

  handleSearchHero (): void {
    const heroValue: string = this.searchInput.value || '';
    //console.log({ heroValue });
    this.heroService.getSuggestions(heroValue)
      .subscribe(
        heroes => {
          this.heroes = heroes;
        }
      )
  }

  onSelectedOption ( event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value);
    if ( !event.option.value ) {
      this.selectedHero = undefined;
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );
    this.selectedHero = hero;
  }
}
