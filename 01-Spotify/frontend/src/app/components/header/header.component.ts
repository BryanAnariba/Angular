import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  playlistForm = new FormGroup({
    tituloPlaylist: new FormControl( '', [Validators.required, Validators.maxLength( 80 )] ),
  });

  get tituloPlaylist () {
    return this.playlistForm.get( 'tituloPlaylist' );
  }

  constructor(
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public openUserSelectModal( selectUserModal: any ) {
    this.modalService.open( selectUserModal, {
      size: 'md',
      centered: true
    });
  }

  openSavePlaylistModal( savePlaylistModal: any ) {
    this.modalService.open( savePlaylistModal, {
      size: 'lg',
      centered: true
    });
  }

  savePlaylist = () => {

  }

  selectUser = () => {

  }



}
