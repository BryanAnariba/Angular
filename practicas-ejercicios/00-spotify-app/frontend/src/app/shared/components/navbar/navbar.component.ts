import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/playlist/interfaces/Playlist';
import { ToastrService } from 'ngx-toastr';
import { PlaylistService } from 'src/app/playlist/services/playlist.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output()
  public onSendUserSelected = new EventEmitter<string>();

  public users: User[] = [];
  public userSelected: string = '';
  public tituloPlaylist: string = '';

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private toastService: ToastrService,
    private playlistService: PlaylistService
  ) {  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        (users) => {
          //console.log(users);
          this.users = users;
        }
      )  
  }

  public open(modal: any): void {
    this.modalService.open( modal, { size: 'md', centered: true } );
  }

  public handleSavePlaylist(): void {
    if ( !this.userSelected ) {
      this.toastService.warning('Please select a user!', 'Warning!');
    } else {
      console.log({ userSelected: this.userSelected, tituloPlaylist: this.tituloPlaylist });
      this.playlistService.saveNewPlaylist( this.userSelected, this.tituloPlaylist )
        .subscribe(
          (user) => {
            //console.log(user);
            this.toastService.success('Playlist Saved Successfully!', 'Warning!');
            this.handleSelectedUser( this.userSelected );
          }
        )
    }
  }

  public handleSelectedUser( userSelected: any ): void {
    if ( !userSelected ) {
      this.toastService.warning('Please select a user!', 'Warning!');
    } else {
      this.modalService.dismissAll();
      console.log('navbar.component.ts send to app.component.ts: ', { userSelected });
      this.userSelected = userSelected;
      this.onSendUserSelected.emit( userSelected );
    }
  }
}
