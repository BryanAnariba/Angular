import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PracticaguiadacalculadoraComponent } from './components/practicaguiadacalculadora/practicaguiadacalculadora.component';
import { DirectivaifComponent } from './components/directivaif/directivaif.component';
import { DirectivaforComponent } from './components/directivafor/directivafor.component';
import { PracticaguiadadosempleadosComponent } from './components/practicaguiadadosempleados/practicaguiadadosempleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PracticaguiadacalculadoraComponent,
    DirectivaifComponent,
    DirectivaforComponent,
    PracticaguiadadosempleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // IMPORTACIONES ABAJO
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
