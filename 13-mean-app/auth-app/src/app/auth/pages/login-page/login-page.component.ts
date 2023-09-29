import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);
  private router      = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    email: [ 'saarie115@gmail.com', [ Validators.required, Validators.email ] ],
    password: [ 'asd.456', [ Validators.required, Validators.minLength(6) ] ]
  });

  public login (): void {
    console.log(this.loginForm.value)
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
    .subscribe({
      next: () => {
        console.log('Login Ok!')
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error({loginError: error});
        Swal.fire('Error', error, 'error')
      }
    });
    this.loginForm.reset();
  }
}
