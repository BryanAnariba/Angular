import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-caracteristicasempleado',
  templateUrl: './caracteristicasempleado.component.html',
  styleUrls: ['./caracteristicasempleado.component.scss']
})
export class CaracteristicasempleadoComponent implements OnInit {

  // con esto sale del componente y el padre podra verlo y obtenerlo
  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  constructor( private empleadosService: EmpleadosService ) { }

  ngOnInit(): void {
  }

  getCaracteristicasEmpleado = ( caracteristicaEmpleado: string ): void => {
    this.empleadosService.muestraMensaje(
      `Agregar caracteristica: ${ caracteristicaEmpleado }`
    );
    this.caracteristicasEmpleado.emit( caracteristicaEmpleado );
  }
}
