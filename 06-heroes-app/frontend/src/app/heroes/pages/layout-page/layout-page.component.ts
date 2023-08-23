import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {

  constructor ( 
    private authService: AuthService,
    private router: Router
  )
  {}

    get user (): User | undefined {
      return this.authService.currentUser;
    }

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list-hero' },
    { label: 'Nuevo', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search-hero' }
  ]

  public onLogout(): void {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }
}
