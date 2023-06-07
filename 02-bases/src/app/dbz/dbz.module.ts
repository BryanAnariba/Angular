import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent // Importaciones de componentes obligatorias
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent // Si queremos que salga al exterior exportar
  ]
})
export class DbzModule { }
