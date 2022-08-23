import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicaguiadacalculadora',
  templateUrl: './practicaguiadacalculadora.component.html',
  styleUrls: ['./practicaguiadacalculadora.component.scss']
})
export class PracticaguiadacalculadoraComponent implements OnInit {
  public title: string = 'PRACTICA GUIADA #1 CALCULADORA'
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public adition: number = 0;
  public substract: number = 0;
  public multiplicate: number = 0;
  public divide: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  handleAdding = (): void => {
    this.adition = Number( this.firstNumber ) + Number( this.secondNumber );
  }

  handleSubstract = (): void => {
    this.substract = Number( this.firstNumber ) - Number( this.secondNumber );
  }

  handleMultiplicate = (): void => {
    this.multiplicate = Number( this.firstNumber ) * Number( this.secondNumber );
  }

  handleDivide = (): void => {
    this.divide = ( Number( this.firstNumber ) / Number( this.secondNumber ) );
    this.divide = Number( this.divide.toFixed( 2 ) );
  }

  handleGetOperations = (): void => {
    this.handleAdding();
    this.handleSubstract();
    this.handleMultiplicate();
    this.handleDivide();
    this.firstNumber = 0;
    this.secondNumber = 0;
    //Bass... Can U Hear Me
  }

}
