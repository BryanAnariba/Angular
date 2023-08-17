import { Component, Input } from '@angular/core';
import { faPlus, faPlay, faMusic } from '@fortawesome/free-solid-svg-icons';
import { Playlist } from '../../interfaces/Playlist';


@Component({
  selector: 'playlist-item',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  @Input()
  public playlist!: Playlist;


  public faPlay = faPlay;
  public faMusic = faMusic;
}

