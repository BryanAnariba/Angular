import { Component, Input, OnInit } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';

import { Artist } from 'src/app/album/interfaces/Album';
import { AlbumService } from 'src/app/album/services/album.service';
import { Playlist } from 'src/app/playlist/interfaces/Playlist';
import { PlaylistService } from 'src/app/playlist/services/playlist.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  public playlists?: Playlist[] = [];
  
  @Input()
  public userSelected?: string = '';

  public faMusic = faMusic;
  public faPlay = faPlay;
  public artists: Artist[] = [];

  /*public handleClickArtist( id: string | number ): void {
    console.log({ id });
  }

  public handleClickPlaylist( id: string | number ): void {
    console.log({ id });
  }*/

  constructor (
    private albumService: AlbumService,
    private playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    //console.log(this.playlists);
    this.albumService.getAlbumes()
      .subscribe(
        ( artists ) => {
          this.artists = artists;
        }
      )
  }
}
