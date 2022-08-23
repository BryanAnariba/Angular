import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivaif',
  templateUrl: './directivaif.component.html',
  styleUrls: ['./directivaif.component.scss']
})
export class DirectivaifComponent implements OnInit {
  public titleDirectivaIf: string = 'USO DIRECTIVA ngIf';
  public firstName: string = '';
  public lastName: string = '';
  public cargo: string = '';
  public success: string = '';
  public registrado: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  signup = (): void => {
    this.registrado = true;
    this.success = `Usuario ${ this.firstName } ${ this.lastName } registrado`;
  }

}
