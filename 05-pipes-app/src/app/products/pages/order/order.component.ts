import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public orderBy: keyof Hero | '' = '';
  public sortBy: string = '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color:  Color.black
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]
  public isUpperCase: boolean = false;

  handleToggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public handleChangeValue( value: keyof Hero ) {
    this.orderBy = value;
  }
}
