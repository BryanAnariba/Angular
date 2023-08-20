import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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
}
