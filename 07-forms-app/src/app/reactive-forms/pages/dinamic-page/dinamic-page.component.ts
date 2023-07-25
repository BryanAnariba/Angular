import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css']
})
export class DinamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Dead Stranding', Validators.required],
    ]),
  });

  constructor ( private fb: FormBuilder ) {}

  get favoriteGames () {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  public isValidFieldInArray ( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

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

  public handleSubmit () {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();

    // Limpieza del array, ay que tiparlo como FormAarray
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
  }

  public handleDeleteFavorite (index: number): void {
    this.favoriteGames.removeAt(index);
  }

  public newFavorite: FormControl = new FormControl( '', Validators.required );
  public handleAdd (  ): void {
    if ( this.newFavorite.invalid ) {
      return;
    }
    console.log(this.newFavorite.value);
    this.favoriteGames.push( this.fb.control( this.newFavorite.value, Validators.required ) );
    this.newFavorite.reset();
  }
}
