import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor ( 
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ heroId }) => this.heroService.getHero( heroId ) )
    )
    .subscribe(
      hero => {
        if ( !hero ) {
          this.router.navigateByUrl('/heroes/list');
        }
        this.hero = hero;
        console.log(this.hero);
      }
    )
  }

  public goBack(): void {
    this.router.navigateByUrl('/heroes/list');
  }

}
