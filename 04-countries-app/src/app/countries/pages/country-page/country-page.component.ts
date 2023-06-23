import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( params => this.countriesService.getCountryByAlphaCode( params['alphaCode'] ) )
      )
      .subscribe((country) => {
        if ( !country ) {
          return this.router.navigateByUrl( '' );
        }
        console.log({country});
        return this.country = country;
      });
  }
}
