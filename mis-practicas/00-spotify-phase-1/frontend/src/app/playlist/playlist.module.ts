import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FontAwesomeModule 
  ],
  exports: []
})
export class PlaylistModule { }
