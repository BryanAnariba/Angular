import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
    canActivate: [ canActivateGuard ],
    canMatch: [ canMatchGuard ]
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
