import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl: string = environments.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  public getHeroes (): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>( `${ this.baseUrl }/heroes`, {})
    .pipe(
      catchError((error) => {
        console.log( error );
        return of([])
      })
    );
  }

  public getHeroById ( heroId: string ): Observable<Hero | null> {
    return this.httpClient.get<Hero | null>( `${ this.baseUrl }/heroes/${ heroId }`, {} )
    .pipe(
      catchError(
        error => {
          console.log( error );
          return of(null)
        }
      )
    );
  }

  public heroesByQueryParams ( query: string ): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>( `${ this.baseUrl }/heroes?q=${query}&_limit=6`, {} )
    .pipe(
      catchError(
        error => {
          console.log(error);
          return of(error);
        }
      )
    );
  }

  public createHero ( hero: Hero ): Observable<Hero | null> {
    return this.httpClient.post<Hero | null>( `${this.baseUrl }/heroes`, hero )
    .pipe(
      catchError(
        error => {
          console.log(error);
          return of(null)
        }
      )
    );
  }

  public updateHeroById ( hero: Hero ): Observable<Hero | null> {
    if ( !hero.id ) throw new Error( 'Hero id is required' );

    return this.httpClient.patch<Hero | null>( `${ this.baseUrl }/heroes/${ hero.id }`, hero )
    .pipe(
      catchError(
        error => {
          console.log(error);
          return of(null)
        }
      )
    );
  }

  public deleteHerpById ( heroId: string ): Observable<boolean> {
    return this.httpClient.delete( `${ this.baseUrl }/heroes/${ heroId }`, {})
    .pipe(
      catchError(
        error => of(false)
      ),
      map(
        res => true
      )
    )
  }
}
