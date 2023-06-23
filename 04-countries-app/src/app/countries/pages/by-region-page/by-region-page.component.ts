import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  constructor ( private countriesService: CountriesService ) {}
  @Input()
  public countries: Country[] = [];

  public onValue ( value: string ): void {
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesService.getCountriesByCountryRegion( value )
      .subscribe(
        ( countries ) => {
          this.countries = countries;
        }
      );
  }
}
