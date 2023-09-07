import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/countries.interfaces';
import { apiUrl } from 'src/app/environments/environments.dev';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _apiUrl: string = apiUrl;
  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Europe, Region.Oceania, Region.Asia ];
  
  constructor( private httpClient: HttpClient ) { }
  
  get regions () {
    return [ ...this._regions ];
  }

  public getCountriesByRegion ( region: string | null ): Observable<SmallCountry[]> {
    if ( !region ) return of([]);
    return this.httpClient.get<Country[]>( `${ this._apiUrl }/region/${ region }?fields=cca3,name,borders`, {})
    .pipe(
      map(
        countries => countries.map( country => ({ name: country.name.common, cca3: country.cca3, borders: country.borders ?? [] })) // Transformamos la data que da el endpoint de tipo Country a SmallCountry
      ),
      tap(
        res => console.log({ countriesByRegion: res })
      ),
      catchError(
        error => {
          console.error(error);
          return of([]);
        }
      )
    )
  }

  public getBordersByAlphaCode( alphaCode: string | null ) : Observable<SmallCountry> {    
    console.log({alphaCode});
    return this.httpClient.get<Country>( `${ this._apiUrl }/alpha/${ alphaCode }?fields=cca3,name,borders`, {} )
    .pipe(
      map(
        country=> ({ name: country!.name.common, cca3: country!.cca3, borders: country?.borders ?? [] } )
      )
    );
  }

}
