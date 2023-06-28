import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Album } from 'src/app/album/interfaces/Album';
import { AlbumService } from 'src/app/album/services/album.service';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  public albumes?: Album[] = [];
  constructor ( 
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService
  ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(
        (param) => this.albumService.getAlbumesByArtist( param['playlistId'] )
      )
    )
    .subscribe(
      (albumes) => {
        //console.log(albumes);
        this.albumes = albumes?.albumes;
      }
    )
  }
  
}
