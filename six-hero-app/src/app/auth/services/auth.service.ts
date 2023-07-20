import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user: User | null = null;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser(): User | null {
    if ( !this.user ) return null;

    // Hace un clon del objeto ESTE METODO ES NUEVO y es homologo al spread operator { ...this.user }
    return structuredClone(this.user);
  }

  public login( email: string, password: string ): Observable<User> {
    return this.http.post<User>( `${ this.baseUrl }/users`, {
      email: email,
      password: password
    })
    .pipe(
      tap( user => this.user = user ),
      tap( user => localStorage.setItem( 'token', 'asdsadsasad'  ) //  user.id.toString()
    ));
  }

  public logOut(): void {
    this.user = null;
    localStorage.clear();
  }

  public checkAuthenticationStatus (): Observable<boolean> {

    /*
      <boolean> | boolean esto es asi por que si no hay nadie en localstorage no tengo que suscribirme aun observable solo es boleean y ya,
      pero si ay alguien en el localstorage seria Observable<boolean>

      !!user: Doble negacion algo poco entendible, buscar documentacion
    */
    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem( 'token' );
    return this.http.get<User>(`${ this.baseUrl }/users/1`, {})
    .pipe(
      tap( user => this.user = user),
      map( user => !!user ),
      catchError( error => of(false) )
    );

  }
}
