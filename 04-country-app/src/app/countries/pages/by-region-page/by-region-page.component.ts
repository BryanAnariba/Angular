import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public countriesData: Country[] = [];

  constructor (
    private countryService: CountryService
  ) {}

  searchByRegion(value: string): void {
    console.log('by-region-page recibion del hijo', { value });
    this.countryService.searchRegion(value)  
    .subscribe(
      (countries) => {
        this.countriesData = countries;
      }
    )
  }
}
