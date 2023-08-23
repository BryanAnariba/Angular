import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor( 
    private authService: AuthService,
    private router: Router
  ) {}

  public onLogin(): void {
    this.authService.login('saariel115@gmail.com', 'asd.456')
    .subscribe(
      user => {
        console.log(user);
        this.router.navigate(['/heroes/list-hero']);
      }
    );
  }
}
