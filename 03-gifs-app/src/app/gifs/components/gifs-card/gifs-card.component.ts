import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/Gifs.interfaces';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if ( !this.gifItemData ) throw new Error( 'Gif Property is required' );
  }
  @Input()
  public gifItemData!: Gif;

}
