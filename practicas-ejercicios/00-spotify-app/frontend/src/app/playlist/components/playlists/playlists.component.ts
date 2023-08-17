import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PlaylistService } from '../../services/playlist.service';
import { Playlist, User } from '../../interfaces/Playlist';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  public playlistData?: Playlist[] = [];
  public userData?: User | null;

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( param => this.playlistService.getPlaylistData(param['userId'], param['playlistId'] ) )
    )
    .subscribe(
      ( user ) => {
        //console.log(user?.playlists![0]);
        this.userData = user;
        this.playlistData = user?.playlists;
      }
    );
  }
  
}
