import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search-hero-page',
  templateUrl: './search-hero-page.component.html',
  styleUrls: ['./search-hero-page.component.scss']
})
export class SearchHeroPageComponent {
  public heroes: Hero[] = [];
  public searchInput = new FormControl('');
  public selectedHero?: Hero;

  constructor ( private heroService: HeroService ) {}
  onSearchHero () {
    const value: string = this.searchInput.value || '';
    //console.log({ value });
    this.heroService.heroesByQueryParams( value )
    .subscribe(
      heroes => {
        this.heroes = heroes;
        console.log(heroes);
      }
    )
  }

  public onSelectedOption ( event: MatAutocompleteSelectedEvent ): void {
    console.log(event.option.value);
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero =  event.option.value;
    this.searchInput.setValue( hero.superhero );
    this.selectedHero = hero;
  }
}
