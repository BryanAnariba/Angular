import { Component } from '@angular/core';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'album-item',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  public faPlus = faPlus;
  public faPlay = faPlay;
}
