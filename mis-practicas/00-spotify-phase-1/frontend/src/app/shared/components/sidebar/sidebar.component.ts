import { Component, OnInit } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import { AlbumService } from 'src/app/album/services/album.service';
import { PlaylistService } from 'src/app/playlist/services/playlist.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public faMusic = faMusic;
  public faPlay = faPlay;

  /*public handleClickArtist( id: string | number ): void {
    console.log({ id });
  }

  public handleClickPlaylist( id: string | number ): void {
    console.log({ id });
  }*/

  constructor (
    private albumService: AlbumService,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    // TODO: llamar todos los albumes
  }
}
