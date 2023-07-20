import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AlbumesComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FontAwesomeModule
  ],
  exports: []
})
export class AlbumModule { }
