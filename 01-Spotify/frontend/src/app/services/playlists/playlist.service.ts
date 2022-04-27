import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getArtists (): Observable<any> {
    return this.httpClient.get( `${ environment.ARTIST_API_URL }`, {} );
  }

}
