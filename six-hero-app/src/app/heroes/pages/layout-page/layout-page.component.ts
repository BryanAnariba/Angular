import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarIcons = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Agregar', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor ( private authService: AuthService, private router: Router ) { }

  get user(): User | null {
    return this.authService.currentUser;
  }

  public handleLogout(): void {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }

}
