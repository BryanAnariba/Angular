import { Component, OnInit } from '@angular/core';
import { IEmpleado } from 'src/app/interfaces/iempleado';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadocomponentepadre',
  templateUrl: './empleadocomponentepadre.component.html',
  styleUrls: ['./empleadocomponentepadre.component.scss']
})
export class EmpleadocomponentepadreComponent implements OnInit {

  public title: string = 'COMUNICACION ENTRE COMPONENTES';
  public nombreEmpleado: string = '';
  public apellidoEmpleado: string = '';
  public cargoEmpleado: string = '';
  public salarioEmpleado: number = 0;
  public empleados: IEmpleado[] = [
    new Empleado( "Bryan Ariel", "Sanchez Anariba", "Backend Dev", 1000 ),
    new Empleado( "Erick Ariel", "Sanchez Anariba", "Frontend Dev", 1000 ),
    new Empleado( "Aurora Alejandra", "Sanchez Anariba", "Dev Ops", 1000 ),
    new Empleado( "Juan Perez", "Sanchez Anariba", "FS DEV", 1000 ),
  ];

  constructor( private empleadosService: EmpleadosService ) { }

  ngOnInit(): void {
  }

  public handleAddEmpleado = (): void =>{
    this.empleadosService.muestraMensaje(
      `Agregar a: ${ this.nombreEmpleado } ${ this.apellidoEmpleado }`
    );
    this.empleados = [ new Empleado( this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado ), ...this.empleados ]  ;
  }

}
