import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/countries.interfaces';
import { apiUrl } from 'src/app/environments/environments.dev';
import { Observable, catchError, of, tap } from 'rxjs';
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
    return this.httpClient.get<SmallCountry[]>( `${ this._apiUrl }/region/${ region }?fields=cca3,name,borders`, {})
    .pipe(
      tap(
        res => console.log(res)
      ),
      catchError(
        error => {
          console.error(error);
          return of([]);
        }
      )
    )
  }

}
