import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  constructor ( private activatedRoute: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(
      (param: any) => {
        console.log({ playlist: param['playlistId']});
      }
    )
  }

  
}
