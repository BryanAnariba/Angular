import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache.store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private API_URL: string = 'https://restcountries.com/v3.1';

  // SIMULANDO ESTADO: Redux seria bueno aqui pero por esa es la razon por la que no me gusta react
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor( private httpClient: HttpClient ) { 
    // ESTO NO SE DESTRUYE COMO LOS COMPONENTES, LA INSTANCIA DEL SERVICIO MANTIENE LA INFORMACION
    this.onLoadFromLocalStorage();
  }

  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url, {})
      .pipe(
        catchError(
          error => {
            console.error(error);
            return of([])
          }
        ),
        //delay(2000),
      );
  }

  public getCountriesByCapital ( term: string ): Observable<Country[]> {
    return this.getCountriesRequest( `${ this.API_URL }/capital/${ term }`, )
      .pipe(
        tap( // EN EL TAP ALMACENAMOS EN EL STORE CREADO
          (countries) => {
            this.cacheStore.byCapital = {
              term: term,
              countries: countries
            }
          }
        ),
        tap(
          () => this.onSaveLocalStorage()
        )
      );
  }

  public getCountriesByCountryName ( term: string ): Observable<Country[]> {
    return this.getCountriesRequest( `${ this.API_URL }/name/${ term }`, )
      .pipe(
        tap(
          (countries) => {
            this.cacheStore.byCountry = {
              term: term,
              countries: countries
            }
          }
        ),
        tap(
          () => this.onSaveLocalStorage()
        )
      );
  }

  public getCountriesByCountryRegion ( region: Region ): Observable<Country[]> {
    return this.getCountriesRequest( `${ this.API_URL }/region/${ region }`, )
      .pipe(
        tap(
          (countries) => {
            this.cacheStore.byRegion = {
              countries: countries,
              region: region
            }
          }
        ),
        tap(
          () => this.onSaveLocalStorage()
        )
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

  private onSaveLocalStorage () {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ) );
  }

  private onLoadFromLocalStorage () {
    if ( !localStorage.getItem('cacheStore') ) return;
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

}
