import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SerachPageComponent } from './pages/serach-page/serach-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

// ng g m heroes --routing
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search', component: SerachPageComponent },
      { path: 'edit/:heroId', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':heroId', component: HeroPageComponent }, // OJO CUANDO LA BUSQUEDA ES SOLO DE :id DEJARLA DE ULTIMO POR QUE SI PONES DEE PRIMERO NUNCA CARGARAN LAS DEMAS
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
