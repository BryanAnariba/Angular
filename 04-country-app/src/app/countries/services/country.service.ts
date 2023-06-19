import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient  ) { }

  searchCapital ( term: string ): Observable<Country[]>  {
    return this.httpClient.get<Country[]>( `${ this.API_URL }/capital/${ term }`, {}).pipe(
      catchError((error) => {
          // SI ESCRIBEN UNA BRUTADA LANZA ERROR
          console.log(error);
          return of([])
        }
      )
    );
  }

  searchCountry ( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${ this.API_URL }/name/${ term }`, {}).pipe(
      catchError(
        (error) => {
          // SI ESCRIBEN UNA BRUTADA LANZA ERROR
          console.log(error);
          return of ([]);
        }
      )
    );
  }

  searchRegion ( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${ this.API_URL }/region/${ term }`, {}).pipe(
      catchError(
        (error) => {
          // SI ESCRIBEN UNA BRUTADA LANZA ERROR
          console.log(error);
          return of ([]);
          
        }
      )
    );
  }

  searchCountryByAlphaCode ( term: string ): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${ this.API_URL }/alpha/${ term }`).pipe(
      map( countries => countries.length > 0 ? countries[0] : null), // CON ESTO ASEGURAMOS DE MANDAR UN Country no un Array de Country
      catchError(
        (error) => {
          // SI ESCRIBEN UNA BRUTADA LANZA ERROR
          console.log(error);
          return of(null);
          
        }
      )
    );
  }
}
