import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  constructor ( private countriesServices: CountriesService ) {}

  public onValue( value: string ): void {
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesServices.getCountriesByCapital( value )
      .subscribe((countries: Country[]) => {
        this.countries = countries;
      });
  }
}
