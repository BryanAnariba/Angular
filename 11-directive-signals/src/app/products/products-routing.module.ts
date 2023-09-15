import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsLayoutPageComponent } from './pages/products-layout-page/products-layout-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsLayoutPageComponent,
    children: [
      { path: 'new', component: ProductPageComponent },
      { path: '**', redirectTo: 'new' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
