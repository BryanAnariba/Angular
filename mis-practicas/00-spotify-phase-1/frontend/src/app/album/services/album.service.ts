import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Artist } from '../interfaces/Album';

const API: string = 'http://localhost:3500/api/artists';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAlbumes (): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>( `${ API }`, {} )
      .pipe(
        catchError(
          (error) => {
            console.error(error);
            return of([])
          }
        )
      )
  }

  public getAlbumesByArtist(artistId: string): Observable< Artist | null > {
    return this.httpClient.get<Artist | null>( `${ API }/${ artistId }/albumes`, {})
      .pipe(
        catchError(
          (error) => {
            console.error(error);
            return of(null);
          }
        )
      )
  }
}
