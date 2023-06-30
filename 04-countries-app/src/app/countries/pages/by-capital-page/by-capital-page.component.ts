import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor ( private countriesServices: CountriesService ) {}
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  public onValue( value: string ): void {
    this.isLoading = true;
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesServices.getCountriesByCapital( value )
      .subscribe((countries: Country[]) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
