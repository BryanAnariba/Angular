import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{

  ngOnInit(): void {
    if ( !this.imageUrl ) throw new Error('Image Url Is Required!')
  }


  onLoad(): void {
    console.log('Loaded');
    this.hasLoaded = true;
  }

  @Input()
  public imageUrl!: string;
  @Input()
  public alt!: string;
  public hasLoaded: boolean = false;

}
