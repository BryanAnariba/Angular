import { Component } from '@angular/core';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'playlist-item',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  public faPlay = faPlay;
  public faPlus = faPlus;

  constructor ( private modalService: NgbModal ) {}
  public handleOpenModal( modal: any ): void {
    this.modalService.open( modal, { centered: true, size: 'md' } );
  }

  public handleAddToPlaylist(): void {

  }
}

