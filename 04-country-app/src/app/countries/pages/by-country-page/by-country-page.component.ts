import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
  constructor (
    private countryService: CountryService
  ) {}
  public countriesData: Country[] = [];

  searchByCountryName( value: string ): void {
    console.log(`by-country-page recibio del hijo esto:`, { value });
    this.countryService.searchCountry(value)
    .subscribe(
      (countries) => {
        this.countriesData = countries;
      }
    )
  }

}
