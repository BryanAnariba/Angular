import { SearchHeroPageComponent } from './pages/search-hero-page/search-hero-page.component';
import { NewHeroPageComponent } from './pages/new-hero-page/new-hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListHeroPageComponent } from './pages/list-hero-page/list-hero-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children: [
    { path: 'new-hero', component: NewHeroPageComponent },
    { path: 'list-hero', component: ListHeroPageComponent },
    { path: 'search-hero', component: SearchHeroPageComponent },
    { path: 'edit/:heroId', component: NewHeroPageComponent },
    { path: ':heroId', component: HeroPageComponent },
    { path: '**', redirectTo: 'list-hero' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
