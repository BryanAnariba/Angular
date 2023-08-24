import { tap, Observable, map } from 'rxjs';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';

const isLogged = (): boolean | Observable<boolean>=> {

  const authService: AuthService = inject( AuthService );
  const router: Router = inject( Router );

  return authService.checkAuthStatus()
  .pipe(
    tap(
      isAuthenticated => console.log('isAuthenticated: ', isAuthenticated)
    ),
    tap( isAuthenticated => { // Si esta autenticado y escribio en la url auth/login redirigir al heroes/hero-list
      if ( isAuthenticated ) {
        router.navigate(['/']);
      }
    }),
    map( // Si no, si no esta autenticado y quiere ir a hero retornamos false y el otr guard hara el resto
      isAuthenticated => !isAuthenticated
    )
  );

}

export const publicCanActiveGuard: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  console.log('works')
  return isLogged();
}

// export const publicCanMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[] ) => {
//   console.log('canMatchGuard Route Working!');
//   console.log({ route, segments });
//   return isLogged();
// }
