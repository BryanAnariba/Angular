import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private API_URL = 'http://localhost:5000/api/photos';

  constructor( private http: HttpClient ) { }

  createPhoto = ( photoData: IPhoto, photo: any ): Observable<any> => {
    const fd = new FormData();
    fd.append( 'title', photoData.title );
    fd.append( 'description', photoData.description );
    fd.append( 'image', photo );
    return this.http.post( `${ this.API_URL }`, fd );
  }

  getPhotos = (): Observable<any> => {
    return this.http.get( `${ this.API_URL }`, {} );
  }

  getPhoto = ( photoId: string ): Observable<any> => {
    return this.http.get( `${ this.API_URL }/${ photoId }`, {} );
  }

  editPhoto = ( photoId: string, photoData: IPhoto ): Observable<any> => {
    return this.http.put( `${ this.API_URL }/${ photoId }`, photoData )
  }

  deletePhoto = ( photoId: string ): Observable<any> => {
    return this.http.delete( `${ this.API_URL }/${ photoId }`, {} )
  }
}
