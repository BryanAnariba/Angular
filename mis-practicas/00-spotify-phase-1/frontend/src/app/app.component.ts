import { Component } from '@angular/core';
import { PlaylistService } from './playlist/services/playlist.service';
import { Playlist, User } from './playlist/interfaces/Playlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playlists?: Playlist[] = [];
  title = 'frontend';

  constructor( private playlistService: PlaylistService ) {}

  public handleSelectedUser( userSelected: string ): void { 
    console.log('app.component.ts rece ived from navbar.component.ts: ', { userSelected });
    this.playlistService.getPlaylistFromUserId(userSelected)
      .subscribe(
        (userData) => {
          //console.log(userData?.playlists);
          this.playlists = userData?.playlists;
        }
      )
  }

}
