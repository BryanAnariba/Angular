import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/ {
  title = 'frontend';

  /*
  constructor( private authService: AuthService ) {}

  ngOnInit(): void {
    this.authService.checkAuthStatus()
    .subscribe(
      () => {
        console.log( 'The user is authenticated!!!' );
      }
    )
  }
  */
}
