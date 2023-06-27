import { Component } from '@angular/core';
import { faPlus, faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'album-item',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  public faPlay = faPlay;
  public faMusic = faMusic;

  
}
