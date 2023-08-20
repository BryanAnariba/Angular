import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(1000), // quitar en produccion esto simula una carga lenta
      switchMap(
        ({ heroId }) => this.heroService.getHeroById(heroId),
      )
    )
    .subscribe(
      hero => {
        if ( !hero ) return this.router.navigateByUrl( '/heroes/list-hero' );
        this.hero = hero;
        console.log(this.hero);
        return;
      }
    );
  }
}
