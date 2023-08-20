import { Component } from '@angular/core';

@Component({
  selector: 'heroes-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.scss']
})
export class NewHeroPageComponent {
  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' }
  ]
}
