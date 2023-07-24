import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/]),
  //   price: new FormControl(0, [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/]),
  //   inStorage: new FormControl(0, [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/])
  // });
  constructor( private formBuilder: FormBuilder ) {}

  public myForm: FormGroup = this.formBuilder.group({
    name: [''],
    price: [0],
    inStorage: [0],
  });
  
  public handleSubmit(): void {
    console.log( `myForm:`, this.myForm.value);
  }
}
