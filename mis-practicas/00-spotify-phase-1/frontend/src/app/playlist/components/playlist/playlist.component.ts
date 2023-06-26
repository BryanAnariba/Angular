import { Component } from '@angular/core';
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'playlist-item',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  public faPlay = faPlay;
  public faMusic = faMusic;
}
