import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list-hero' },
    { label: 'Nuevo', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search-hero' }
  ]
}
