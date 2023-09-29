import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../enums';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  console.log('IsNotAuthenticatedGuard!');

  const authService: AuthService = inject(AuthService);
  const router: Router  = inject(Router);
  console.log({ authStatus: authService.authStatus() });

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
