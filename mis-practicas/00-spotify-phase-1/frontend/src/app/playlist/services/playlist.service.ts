import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../interfaces/Playlist';

const API: string = 'http://localhost:3500/api/users';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPlaylistFromUserId( userId: string ): Observable<User | null> {
    return this.httpClient.get<User | null>( `${ API }/${ userId }/playlists`, {})
      .pipe(
        catchError(
          (error) => {
            console.log(error);
            return of(null)
          }
        )
      );
  }

  public saveNewPlaylist( userId: string, tituloPlaylist: string ): Observable<User | null> {
    return this.httpClient.post<User | null>( `${ API }/${ userId }/playlists`, { tituloPlaylist: tituloPlaylist } )
      .pipe(
        catchError(
          (error) => {
            console.error(error);
            return of(null);
          }
        )
      )
  }

  public getPlaylistData( userId: string, playlistId: string ): Observable<User | null> {
    return this.httpClient.get<User | null>( `${ API }/${ userId }/playlists/${ playlistId }/songs`, {} )
      .pipe(
        catchError( 
          (error) => {
            console.error(error);
            return of(null);
          }
        )
      );
  }

  public addSongToPlaylist( userId: string, playlistId: string, nombreCancion: string, artista: string, album: string ): Observable<User | null> {
    return this.httpClient.post<User | null>( `${ API }/${ userId }/playlists/${ playlistId }/songs`, { nombreCancion, artista, album })
      .pipe(
        catchError( error => {
          console.error(error);
          return of(null)
        })
      );
  }
}
