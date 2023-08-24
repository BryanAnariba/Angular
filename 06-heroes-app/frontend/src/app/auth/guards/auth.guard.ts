import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

const isLogged = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject( AuthService );
  const router: Router = inject( Router );

  return authService.checkAuthStatus()
  .pipe(
    tap( (isAuthenticated ) => {
      if ( !isAuthenticated ) {
        router.navigate(['/auth/login']);
      }
    })
  );

}

export const cantActiveGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  console.log('cantActiveGuard Route Working!');
  console.log({ route, state });
  return isLogged();
}

export const canMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[] ) => {
  console.log('canMatchGuard Route Working!');
  console.log({ route, segments });
  return isLogged();
}


