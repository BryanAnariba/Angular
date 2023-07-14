import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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
}
