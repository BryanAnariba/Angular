import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authServise: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  
  public registerForm: FormGroup = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    name: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  });

  register (): void {
    console.log(this.registerForm.value);
    const { email, password, name } = this.registerForm.value;
    this.authServise.register(email, password, name)
    .subscribe({
      next: () => {
        console.log('Registered Success!');
        this.router.navigate(['/dashboard']); 
      },
      error: (error) => {
        console.error(error);
        Swal.fire('Error', error.message, 'error')
      }
    })
    this.registerForm.reset();
  }

}
