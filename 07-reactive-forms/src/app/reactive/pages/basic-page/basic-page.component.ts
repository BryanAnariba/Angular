import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/*
  Consideraciones:
    - En FormControl
    name: new FormControl( valor por defecto sea '' o 0 etc, [ validaciones sincronas ], [ validaciones asincronas ] )
    - En FormBuilder
    name: [valor por defecto sea '' o 0 etc, [ validaciones sincronas ], [ validaciones asincronas ]]
*/

const product = {
  name: 'ACER NITRO 5',
  price: 749.99,
  inStorage: 10
};

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit  {

    /*public myForm: FormGroup = new FormGroup({
    name: new FormControl( '', [], [] ),
    price: new FormControl( 0, [], [] ),
    inStorage: new FormControl( 0, [], [] )
  });*/

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ], [] ],
    price: [ 0, [ Validators.required, Validators.min(0) ], [] ],
    inStorage: [ 0, [ Validators.required, Validators.min(0) ], [] ]
  });

  constructor ( private fb: FormBuilder ) {}

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.myForm.reset(product);
  }

  public isValidField ( field: string ): boolean | null {
    // Retorna bool si tiene errores y fue tocado
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public getFieldError( field: string ): string | null{ 
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};
    for ( const key of Object.keys( errors ) ) {
      switch ( key ) {
        case 'required':
          return 'This Field Is Required.'
        case 'minlength':
          return `Min ${ errors['minlength'].requiredLength } characters.`
        default:
          return '';
      }
    }
    return '';
  }

  public onSave(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    };
    console.log(this.myForm.value);
    this.myForm.reset({ name: '', price: 0, inStorage: 0 });
  }
}
