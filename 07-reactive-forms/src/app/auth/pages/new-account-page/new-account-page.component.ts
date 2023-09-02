import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-new-account-page',
  templateUrl: './new-account-page.component.html',
  styleUrls: ['./new-account-page.component.css']
})
export class NewAccountPageComponent {

  public myForm: FormGroup = this.fb.group({
    userCompleteName: [ '', [ Validators.required, Validators.pattern( this.validatorsService.namesPattern ) ], [] ],
    userEmail: [ '', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [] ],
    userName: [ '', [ Validators.required, this.validatorsService.canBeStrider ], [] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] , [] ],
    passwordTwo: [ '', [ Validators.required, Validators.minLength(6) ] , []]
  });

  constructor ( private fb: FormBuilder, private validatorsService: ValidatorsService ) {}

  public isValidField ( field: string ): boolean | null {
    return this.validatorsService.isValidField( this.myForm, field);
  }

  public getFieldError ( field: string ): string {
    if ( !this.myForm.controls[field] ) return '';
    const errors = this.myForm.controls[field].errors || {};
    for ( const key of Object.keys(errors) ) {
      switch ( key ) {
        case 'required':
          return `${ field } is required.`
        case 'minlength':
          return `${ field } Min ${ errors['minlength'].requiredLength } characters.`
        default:
          return '';
      }
    }
    return '';
  }

  public onSave = () => {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(`Success: `, this.myForm.value);
  }

}
