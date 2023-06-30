import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  @Input()
  public countries: Country[] = [];
  
  public regions: Region[] = [ 'America', 'Africa', 'Asia', 'Oceania', 'Europe' ];
  public selectedRegion?: Region;
  public isLoading: boolean = false;
  //public initialValue?: Region = '';
  
  constructor ( private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public onValue ( value: Region ): void {
    this.isLoading = true;
    this.selectedRegion = value;
    console.log('by-capital-page.component.ts recibio de search-box.component.ts: ', { value });
    this.countriesService.getCountriesByCountryRegion( value )
      .subscribe(
        ( countries ) => {
          this.isLoading = false;
          this.countries = countries;
        }
      );
  }
}
