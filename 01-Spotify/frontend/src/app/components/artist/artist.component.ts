import { Component, OnInit } from '@angular/core';

// Manual importations
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public faPlay = faPlay;
  public faPlus= faPlus;

  constructor(
    public modalServices: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModalSaveSongInPlaylist = ( songInPlaylistHtml: any ) => {
    this.modalServices.open(songInPlaylistHtml, {
      centered: true,
      size: 'md'
    });
  }

  saveSongInPlaylist = () => {

  }

}
