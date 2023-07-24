import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { ReactiveFormsModule as RFM } from '@angular/forms'

@NgModule({
  declarations: [
    BasicPageComponent,
    DinamicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule, 
    RFM,// ojo la cague aqui com el nombre del modulo con el modulo propio de angular/forms se llaman igual 
  ]
})
export class ReactiveFormsModule { }
