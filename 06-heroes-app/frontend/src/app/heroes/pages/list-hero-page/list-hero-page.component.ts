import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-list-hero-page',
  templateUrl: './list-hero-page.component.html',
  styleUrls: ['./list-hero-page.component.scss']
})
export class ListHeroPageComponent implements OnInit {
  public heroList: Hero[] = [];

  constructor (
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe(
      heroes => {
        //console.log( 'Heroes: ', heroes );
        this.heroList = heroes;
      }
    )
  }
}
