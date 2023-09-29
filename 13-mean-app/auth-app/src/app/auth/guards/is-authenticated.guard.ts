import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../enums';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  console.log('IsAuthenticatedGuard!');

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log({ authStatus: authService.authStatus() });
  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  if ( authService.authStatus() === AuthStatus.checking ) {
    return false;
  }

  router.navigate(['/auth/login']);
  return false;
};
