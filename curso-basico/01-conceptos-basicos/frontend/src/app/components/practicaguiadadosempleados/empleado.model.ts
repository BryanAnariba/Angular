export class Empleado {
  public nombreEmpleado: string = '';
  public apellidoEmpleado: string = '';
  public cargoEmpleado: string = '';
  public salarioEmpleado: number = 0;

  constructor ( nombreEmpleado: string, apellidoEmpleado: string, cargoEmpleado: string, salarioEmpleado: number ) {
    this.nombreEmpleado = nombreEmpleado;
    this.apellidoEmpleado = apellidoEmpleado;
    this.cargoEmpleado = cargoEmpleado;
    this.salarioEmpleado = salarioEmpleado;
  }


}
