import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // RUTAS ANEXADAS POR BRYAN
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:photoId',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
