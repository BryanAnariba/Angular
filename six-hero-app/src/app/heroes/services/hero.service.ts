import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private basicUrl: string = environments.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>( `${ this.basicUrl }/heroes`, {})
    .pipe(
      catchError(
        (error) => {
          console.log(error);
          return of([])
        }
      )
    );
  }

  getHero ( id: string ): Observable<Hero | undefined> {
    return this.http.get<Hero | undefined>( `${ this.basicUrl }/heroes/${ id }`, {})
    .pipe(
      catchError(
        error => {
          console.error(error);
          return of(undefined);
        }
      )
    );
  }

  // ESTO ES PARA EL SEARCH COMPONENT LA BUSQUEDA DE HEROES CON AUTOCOMPLETADO
  getSuggestions ( query: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>( `${ this.basicUrl }/heroes?q=${ query }&limit=6` )
    .pipe(
      catchError(
        error => {
          console.error(error);
          return of ([])
        }
      )
    );
  }

  addHero ( hero: Hero ): Observable<Hero> {
    return this.http.post<Hero>(`${ this.basicUrl }/heroes`, hero);
  }

  updateHero( hero: Hero ): Observable<Hero> {
    if ( !hero.id ) throw new Error( 'Hero id is required' )
    return this.http.patch<Hero>(`${ this.basicUrl }/heroes/${ hero.id }`, hero);
  }

  deleteHeroById( id: string ): Observable<boolean> {
    return this.http.delete(`${ this.basicUrl }/heroes/${ id }`,{})
    .pipe(
      catchError(error => of(false)),
      map( resp => true )
    );
  }
}
