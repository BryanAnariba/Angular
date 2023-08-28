import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Basicos', route: './reactive/basic' },
    { title: 'Dinamicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/switches' }
  ];

  public authMenu: MenuItem[] = [
    { title: 'Login', route: './auth/login' },
    { title: 'New Account', route: './auth/new-account' },
    { title: 'Reset Password', route: './auth/reset' },
    { title: 'Forget Password', route: './auth/forget' }
  ];
}
