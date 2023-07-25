import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/]),
  //   price: new FormControl(0, [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/]),
  //   inStorage: new FormControl(0, [/*Validaciones Sincronas*/], [/*Validaciones Asincrondas*/])
  // });

  constructor( private formBuilder: FormBuilder ) {}

  ngOnInit(): void {
    //this.myForm.reset({ name: 'NVIDIA RTX 3060 TI', price: 399.99, inStorage: 9 });
  }

  public myForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    price: [ 0, [ Validators.required, Validators.min( 0 ) ] ],
    inStorage: [ 0, [ Validators.required, Validators.min( 0 ) ] ],
  });

  public isValidField ( field: string ): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public getFieldError( field: string ): string | null{
    if ( !this.myForm.controls[field] ) return null;
    const errors = this.myForm.controls[field].errors || {};

    for ( const key of Object.keys(errors) ) {
      // console.log(key);
      switch ( key ) {
        case 'required':
          return 'Este Campo es requerido';
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  public handleSubmit(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    };

    console.log( `myForm:`, this.myForm.value);

    // Limpiamos formulario
    this.myForm.reset({ name: '', price: 0, inStorage: 0 });
  }
}
