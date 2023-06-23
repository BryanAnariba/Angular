import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor ( private countriesServices: CountriesService ) {}

  public onValue( value: string ): void {
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesServices.getCountriesByCountryName(value)
      .subscribe(
        (countries) => {
          this.countries = countries;
        }
      );
  }
}
