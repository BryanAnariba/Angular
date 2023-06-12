import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/Gifs.interfaces';

const GIPHY_API_KEY: string = 'r18me0tEvp6ex7zhMbFNZVOCWmosoBg3';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private serviceUrl: string = `https://api.giphy.com/v1/gifs`;
  private firstTag: string = '';
  constructor(
    private http: HttpClient
  ) {
    this.getDataFromLocalStorage();
  }

  private saveOnLocalStorage():void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private getDataFromLocalStorage(): void {
    if ( !localStorage.getItem('tagsHistory') ) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('tagsHistory')! );

    if ( this._tagsHistory.length === 0 ) return;
    this.firstTag = this._tagsHistory.shift()!;
    this.searchTag( this.firstTag );
  }

  private organizeHistory ( tag: string ) {
    tag = tag.toLowerCase();

    // Borramos el duplicado
    if ( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( tagFound => tagFound !== tag );
    }

    // Insertamos y limitamos a diez busquedas
    this._tagsHistory = [ tag, ...this._tagsHistory ];
    this._tagsHistory = this._tagsHistory.splice( 0,10 );
    this.saveOnLocalStorage();
  }

  get tagHistory(): string[] {
    return [...this._tagsHistory];
  }

  public async searchTag ( tag: string ): Promise<void> {
    if ( tag.trim().length === 0 ) return;
    this.organizeHistory(tag);

    let params = new HttpParams()
    .set('api_key', GIPHY_API_KEY)
    .set('limit', 10)
    .set('q', tag);
    
    this.http.get<SearchResponse>( `${ this.serviceUrl }/search`, { params } )
    .subscribe((res) => {
      this.gifList = res.data;
      console.log(this.gifList);
    });
  }
}
