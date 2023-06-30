import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor ( private countriesServices: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountry.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountry.term;
  }

  public onValue( value: string ): void {
    this.isLoading = true;
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesServices.getCountriesByCountryName(value)
      .subscribe(
        (countries) => {
          this.countries = countries;
          this.isLoading = false;
        }
      );
  }
}
