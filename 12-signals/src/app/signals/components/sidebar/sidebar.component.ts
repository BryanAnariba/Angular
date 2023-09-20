import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // public sidebarItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'User Info', route: 'user-info' },
  //   { title: 'Mutations', route: 'properties' },
  // ];
  public sidebarItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Mutations', route: 'properties' },
  ]);
}
