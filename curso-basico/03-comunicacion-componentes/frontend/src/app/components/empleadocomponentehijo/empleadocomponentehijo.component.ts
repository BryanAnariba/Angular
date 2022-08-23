import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleadocomponentehijo',
  templateUrl: './empleadocomponentehijo.component.html',
  styleUrls: ['./empleadocomponentehijo.component.scss']
})
export class EmpleadocomponentehijoComponent implements OnInit {
  caracteristicas: string[] = [];

  // AGARRAMOS LO QUE VENGA DEL COMPONENTE PADRE CON INPUT
  @Input() empleadoItem: Empleado;
  @Input() indiceEmpleado: number;
  constructor() { }

  ngOnInit(): void {
  }

  getCaracteristicasEmpleado = ( caracteristicaEmpleado: string ): void => {
    this.caracteristicas = [ caracteristicaEmpleado, ... this.caracteristicas ]
  }

}
