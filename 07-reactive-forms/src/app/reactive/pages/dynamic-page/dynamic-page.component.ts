import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent {
  public favoriteGame: FormControl = new FormControl('');

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ], [] ],
    favoriteGames: this.fb.array([
      [ 'Metal Gear', Validators.required, [] ],
      [ 'Dead Stranding', Validators.required, [] ]
    ])
  })

  get favoriteGames () {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  public isValidField ( field: string ): boolean | null {
    // Retorna bool si tiene errores y fue tocado
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  public isValidFieldInArray ( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
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

  constructor ( private fb: FormBuilder ) {}

  public onSubmit (): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
  }

  public onDeleteFavoriteGame ( index: number ): void {
    this.favoriteGames.removeAt(index);
  }

  public onAddToFavorites (): void {
    if ( this.favoriteGame.invalid ) return;
    console.log(this.favoriteGame.value);
    this.favoriteGames.push(
      this.fb.control( this.favoriteGame.value, Validators.required )
    )
    this.favoriteGame.reset();
    
  }
}
