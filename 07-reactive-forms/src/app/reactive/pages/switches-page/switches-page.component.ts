import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.css']
})
export class SwitchesPageComponent implements OnInit {
  public person = {
    gender: 'M',
    wantNotifications: false
  };
  public myForm: FormGroup = this.fb.group({
    gender: new FormControl<string>( 'M', [ Validators.required ], [] ),
    wantNotifications: new FormControl<boolean>( true, [], [] ),
    termsAndConditions: new FormControl<boolean>( false, [ Validators.requiredTrue ], [] )
  });

  constructor ( private fb: FormBuilder ) {}
  ngOnInit(): void {
    this.myForm.reset( this.person );
  }

  public isValidField ( field: string ): boolean | null {
    // Retorna bool si tiene errores y fue tocado
    return ( this.myForm.controls[field].errors && this.myForm.controls[field].touched );
  }

  public getFieldErrors ( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};
    for ( const key of Object.keys( errors ) ) {
      switch ( key ) {
        case 'required':
          return 'This field is Required'
        default:
          return '';
      }
    }
    return '';
  }

  public onSave = () => {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    const { termsAndConditions, ...restPerson } = this.myForm.value;
    this.person = restPerson;
    console.log( 'Success: ', this.myForm.value, ', Person: ', this.person );
  }

}
