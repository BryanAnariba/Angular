import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Data, UserRequest } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private baseUrl: string = 'https://reqres.in/api/users';

  public getUserById ( id: number ): Observable<Data> {
    return this.http.get<UserRequest>(`${this.baseUrl}/${id}`, {})
    .pipe(
      map(
        res => res.data
      ),
      tap(
        console.log
      )
    )
  }

}
