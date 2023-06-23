import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private API_URL: string = 'https://restcountries.com/v3.1';

  constructor( private httpClient: HttpClient ) { }

  public getCountriesByCapital ( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( `${ this.API_URL }/capital/${ term }`, {})
      .pipe( // CON EL PIPE SE MASAJEA LA INFORMACION: SI OCURRE UN ERROR DESDE AQUI SE MANEJA
        catchError(error => {
          console.error(error);
          return of([]);
        })
      );
  }

  public getCountriesByCountryName ( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( `${ this.API_URL }/name/${ term }`, {} )
      .pipe(
        catchError( error => {
          console.error(error);
          return of([]);        
        })
      );
  }

  public getCountriesByCountryRegion ( term: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( `${ this.API_URL }/region/${ term }`, {} )
      .pipe(
        catchError(error => {
          console.error(error);
          return of([]);
        })
      );
  }

  public getCountryByAlphaCode ( alphaCode:string ): Observable<Country | null> {
    return this.httpClient.get<Country[]>( `${ this.API_URL }/alpha/${ alphaCode }`, {} ) // COMO TAL get<Country[]> la respuesta siempre es un array por el contrato de la api
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null ),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      );
  }
}
