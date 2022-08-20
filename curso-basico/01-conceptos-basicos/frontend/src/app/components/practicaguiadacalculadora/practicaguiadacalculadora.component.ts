import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicaguiadacalculadora',
  templateUrl: './practicaguiadacalculadora.component.html',
  styleUrls: ['./practicaguiadacalculadora.component.scss']
})
export class PracticaguiadacalculadoraComponent implements OnInit {
  public title: string = 'Practica Guiada 1 Calculadora'
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
    this.adition = this.firstNumber + this.secondNumber;
  }

  handleSubstract = (): void => {
    this.substract = this.firstNumber - this.secondNumber;
  }

  handleMultiplicate = (): void => {
    this.multiplicate = this.firstNumber * this.secondNumber;
  }

  handleDivide = (): void => {
    this.divide = this.firstNumber / this.secondNumber;
  }

  handleGetOperations = (): void => {
    this.handleAdding();
    this.handleSubstract();
    this.handleMultiplicate();
    this.handleDivide();
    this.firstNumber = 0;
    this.secondNumber = 0;
  }

}
