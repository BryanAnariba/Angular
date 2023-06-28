import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Album, Cancion } from '../../interfaces/Album';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { PlaylistService } from 'src/app/playlist/services/playlist.service';
import { Playlist } from 'src/app/playlist/interfaces/Playlist';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'album-item',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input()
  public album: Album | null = null;

  @Input()
  public nombreArtista?: string = '';

  @Input()
  public userSelected: string = '';

  public playlists?: Playlist[] = [];
  public nombreCancion: string = '';
  public albumNombre: string = '';

  public faPlay = faPlay;
  public faPlus = faPlus;

  constructor ( 
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private playlistService: PlaylistService,
    private toastService: ToastrService
  ) {}
  public handleOpenModal( modal: any, nombreCancion:string, album: string  ): void {
    //console.log({ userSelected: this.userSelected });
    this.albumNombre = album;
    this.nombreCancion = nombreCancion;
    this.playlistService.getPlaylistFromUserId(this.userSelected)
    .subscribe(
      user => {
        this.modalService.open( modal, { centered: true, size: 'md' } );
        // console.log(user?.playlists);
        this.playlists = user?.playlists;
      }
    )
  }

  public handleAddToPlaylist( playlistId: string ): void {
    // console.log({
    //   userId: this.userSelected,
    //   playlistId: playlistId,
    //   nombreCancion: this.nombreCancion,
    //   nombreArtista: this.nombreArtista,
    //   album: this.albumNombre
    // });
    this.playlistService.addSongToPlaylist( this.userSelected, playlistId, this.nombreCancion, this.nombreArtista!, this.albumNombre )
      .subscribe(
        (user) => {
          console.log(user);
          this.toastService.success(`${ this.nombreCancion } added!`, 'Success!');
          this.modalService.dismissAll();
        }
      )
  }

  public getUrl( caratulaAlbum: string ): SafeStyle {
    // console.log(caratulaAlbum);
    return this.sanitizer.bypassSecurityTrustStyle( `url(./assets/${ caratulaAlbum })` );
  }
}
