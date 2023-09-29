import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-app';

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    if ( this.authService.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });

  // El efecto cambia el estado
  public authStatusChangeEffect = effect(() => {
    switch ( this.authService.authStatus() ) {
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigate(['/dashboard']);
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigate(['/auth/login']);
        return;
    }
  });
}
