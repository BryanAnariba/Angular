import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countriesData: Country[] = [];

  constructor ( private countryService: CountryService ) {}

  searchByCapital ( term: string ): void {
    console.log('by-capital-page recibio de search-box esto: ', {term});
    this.countryService.searchCapital( term )
      .subscribe(
        ( countries ) => {
          this.countriesData = countries;
        }
      );
  }
}
