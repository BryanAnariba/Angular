import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { CheckResponseToken, LoginResponse, RegisterResponse, User } from '../interfaces';
import { AuthStatus } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private httpClient = inject(HttpClient);

  private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // Algo al mundo exterior pero que nadie cambie por eso las signals computadas son, para no alterar solo datos de lectura
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication (user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
    return true;
  }

  register (email: string, password: string, name: string): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/register`;
    const body = { name, email, password };
    return this.httpClient.post<RegisterResponse>( `${url}`, body )
    .pipe(
      map(
        ({user, token}) => {
          console.log('Success: ', { user, token });
          return this.setAuthentication(user, token);
        }
      ),
      catchError(
        err => {
          console.error(err);
          return throwError(() => err.message)
        }
      )
    )
  }

  login ( email: string, password: string ): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/login`;
    const body = {
      email, 
      password
    };
    return this.httpClient.post<LoginResponse>(`${ url }`, body)
    .pipe(
      map(
        ({ user, token }) => {
          console.log('Success: ', {user,token});
          return this.setAuthentication(user, token);
      }),
      catchError(
        err => {
          console.log(err);
          return throwError(() => err.error.message)
        }
      )
    );
  }


  checkAuthStatus (): Observable<boolean> {
    const url = `${ this.baseUrl }/auth/check-token`;
    const token: string | null = localStorage.getItem('token');

    if ( !token ) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<CheckResponseToken>(url, {headers: headers})
    .pipe(
      map(({token, user}) => {
        return this.setAuthentication(user, token);
      }),
      catchError((error) =>{
        console.error(error);
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logout () {
    this._authStatus.set(AuthStatus.notAuthenticated);
    this._currentUser.set(null);
    localStorage.removeItem('token');
  }

}
