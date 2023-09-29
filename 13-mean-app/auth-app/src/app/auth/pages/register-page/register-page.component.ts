import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);

  public registerForm: FormGroup = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    name: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  });

  register (): void {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
