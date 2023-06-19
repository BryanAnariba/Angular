import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, pipe } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  public countryData?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id ) )
    )
    .subscribe(
      (country) => {
        if ( !country ) return this.router.navigateByUrl('');

        console.log(country);

        return this.countryData = country;
      }
    )
  }
  
}
