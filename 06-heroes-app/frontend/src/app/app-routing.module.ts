import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageModule } from './shared/pages/not-found-page/not-found-page.module';

import { cantActiveGuard, canMatchGuard } from './auth/guards/auth.guard';
import { publicCanActiveGuard } from './auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( m => m.AuthModule ),
    canActivate: [ publicCanActiveGuard ],
    //canMatch: [ publicCanMatchGuard ]
  },
  { // ESTA RUTA ESTARA PROTEGIDA POR ESO LOS GUARDS
    path: 'heroes',
    loadChildren: () => import( './heroes/heroes.module' ).then( m => m.HeroesModule ),
    canActivate: [ cantActiveGuard ],
    canMatch: [ canMatchGuard ]
  },
  { path: '404', component: NotFoundPageModule },
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
