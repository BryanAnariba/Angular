import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Manual importations
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import { PlaylistService } from 'src/app/services/playlists/playlist.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onViewArtist = new EventEmitter();
  @Output() onViewPlaylist = new EventEmitter();

  public faMusic = faMusic;
  public faPlay = faPlay;

  public artists: any = [];
  constructor (
    private artistService: PlaylistService,
  ) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe(
      {
        next: ( res: any ) => {
          this.artists = res.data;
          console.log( this.artists );
        },
        error: ( err: any ) => {
          console.error( err );
        },
        //complete: () => console.info('complete')
      }
    );
  }

  // AHHH diste click entonces llevemos la informacion de aqui hasta app.component esto es un evento de salida para ver Artista
  public viewArtist ( artist: any ) {
    //this.visibleRegion = 'artists';
    this.onViewArtist.emit( artist._id );
  }

  // AHHH diste click entonces llevemos la informacion de aqui hasta app.component esto es un evento de salida para ver Playlist
  public viewPlaylist ( playlistId: string ) {
    //this.visibleRegion = 'playlists';
    this.onViewPlaylist.emit( playlistId );
  }

}
