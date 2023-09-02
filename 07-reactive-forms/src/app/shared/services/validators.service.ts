import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public namesPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  constructor() { }

  public canBeStrider = ( control: FormControl ) : ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if ( value === 'strider' ) {
        return {
            isStrider: true
        }
    }
    return null;
  }

  public isValidField ( form: FormGroup, field: string ): boolean | null {
    return (
      form.controls[field].errors 
      &&
      form.controls[field].touched
    );
  }
  
  isFieldOneEqualsFieldTwo ( fieldOne: string, fieldTwo: string ) {
    return ( formGroup: AbstractControl ):  ValidationErrors | null => {
      const fieldValueOne = formGroup.get( fieldOne )?.value;
      const fieldValueTwo = formGroup.get( fieldTwo )?.value;
      if ( fieldValueOne !== fieldValueTwo) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return {notEqual: true}
      }
      // Si las claves hacen match exito puedes registrarlo
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    }
  }
}
