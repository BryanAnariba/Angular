import { Component } from '@angular/core';
import { Sidebar } from '../../interfaces/sidebar.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public reactiveSidebar: Sidebar[] = [
    { title: 'Basicos', route: './reactive-forms/basic' },
    { title: 'Dinamicos', route: './reactive-forms/dinamyc' },
    { title: 'Switches', route: './reactive-forms/switches' },
  ]

  public authMenu: Sidebar[] = [
    { title: 'Registro', route: './auth' },
  ]
}
