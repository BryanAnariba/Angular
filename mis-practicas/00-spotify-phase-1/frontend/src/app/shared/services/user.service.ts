import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from 'src/app/playlist/interfaces/Playlist';
import { HttpClient } from '@angular/common/http';

const API: string = 'http://localhost:3500/api/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${ API }`, {})
    .pipe(
      catchError(
        (error) => {
          console.error(error);
          return of([])
        }
      )
    );
  }
}
