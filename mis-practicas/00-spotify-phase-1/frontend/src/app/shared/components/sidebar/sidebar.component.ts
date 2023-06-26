import { Component } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  public faMusic = faMusic;
  public faPlay = faPlay;

  /*public handleClickArtist( id: string | number ): void {
    console.log({ id });
  }

  public handleClickPlaylist( id: string | number ): void {
    console.log({ id });
  }*/
}
