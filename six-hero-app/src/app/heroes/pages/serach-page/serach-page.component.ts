import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-serach-page',
  templateUrl: './serach-page.component.html',
  styleUrls: ['./serach-page.component.css']
})
export class SerachPageComponent {
  public searchInput = new FormControl('');
}
