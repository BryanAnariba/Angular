import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject( UserService );
  public userId = signal(1);
  public currentUser = signal<Data | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }
  

  loadUser ( id: number ) {
    if ( id <= 0) return;
    this.userId.set(id);
    this.userService.getUserById(id)
    .subscribe(
      user => {
        console.log(user);
        this.currentUser.set(user)
      }
    )
  }
}
