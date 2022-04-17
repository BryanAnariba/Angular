import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  public visibleRegion: string = '';

  // AHH ME COMUNIQUE CON MI COMPONENTE HIJO DEL SIDEBAR OnViewArtist, entonces quieres que te muestre los artistas
  public viewArtist ( artistId: string ) {
    this.visibleRegion = 'artists';
    console.log( { artistId: artistId  });
  }

  // AHHH ME COMUNIQUE CON MI COMPONENTE HIJO DEL SIDEBAR OnViewPlaylist, entonces quieres que te muestre las playlists
  public viewPlaylist ( playlistId: string ) {
    this.visibleRegion = 'playlists';
    console.log( { playlistId: playlistId } );
  }
}
