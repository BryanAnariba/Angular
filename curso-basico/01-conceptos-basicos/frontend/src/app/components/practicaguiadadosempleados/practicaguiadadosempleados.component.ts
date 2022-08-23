import { Component, OnInit } from '@angular/core';
import { IEmpleado } from 'src/app/interfaces/iempleado';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-practicaguiadadosempleados',
  templateUrl: './practicaguiadadosempleados.component.html',
  styleUrls: ['./practicaguiadadosempleados.component.scss']
})
export class PracticaguiadadosempleadosComponent implements OnInit {
  public title: string = 'PRACTICA GUIADA #2 LISTADO DE EMPLEADOS';
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

  constructor() { }

  ngOnInit(): void {
  }

  public handleAddEmpleado = (): void =>{
    this.empleados = [ new Empleado( this.nombreEmpleado, this.apellidoEmpleado, this.cargoEmpleado, this.salarioEmpleado ), ...this.empleados ]  ;
  }

}
