import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadocomponentehijoComponent } from './components/empleadocomponentehijo/empleadocomponentehijo.component';
import { EmpleadocomponentepadreComponent } from './components/empleadocomponentepadre/empleadocomponentepadre.component';
import { CaracteristicasempleadoComponent } from './components/caracteristicasempleado/caracteristicasempleado.component';
import { EmpleadosService } from './services/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadocomponentehijoComponent,
    EmpleadocomponentepadreComponent,
    CaracteristicasempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // IMPORTACIONES
    FormsModule
  ],
  providers: [ // SERVICES
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
