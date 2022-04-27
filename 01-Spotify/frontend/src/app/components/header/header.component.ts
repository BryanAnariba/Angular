import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public users: any = [];

  playlistForm = new FormGroup({
    tituloPlaylist: new FormControl( '', [Validators.required, Validators.maxLength( 80 )] ),
  });

  userForm = new FormGroup({
    _id: new FormControl( '', [ Validators.required ] )
  });

  get tituloPlaylist () {
    return this.playlistForm.get( 'tituloPlaylist' );
  }

  get _id () {
    return this.userForm.get( '_id' )
  }

  constructor(
    public modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public openUserSelectModal( selectUserModal: any ) {
    this.userService.getUsers().subscribe({
      next: ( res: any ) => {
        console.log( res.data );
        this.users = res.data;
        this.modalService.open( selectUserModal, {
          size: 'md',
          centered: true
        });
      },
      error: ( err: any ) => {
        console.error( err );
      },
      //complete: () => {}
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
    console.log( { userId: this.userForm.value._id } );

  }



}
