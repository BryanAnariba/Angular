import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroService } from '../../services/hero.service';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];

  constructor ( 
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
    // Si la url no tiene el /edit entonces es creacion de un nuevo personaje por eso return
    if ( !this.router.url.includes('edit') ) return;

    // Si no tiene un edit es que desea actualizar asi que en el oninit cargamos el heroe en el formulario
    this.activatedRoute.params
    .pipe(
      switchMap(
        ({heroId}) => this.heroService.getHero(heroId),
      )
    )
    .subscribe(
      hero => {
        // Si no hay heroe redirigimos a inicio
        if ( !hero ) {
          return this.router.navigateByUrl('/');
        }

        // Si viene heroe entonces lo cargamos en el html
        this.heroForm.reset(hero);
        return;
      }
    )
  }

  public heroForm =   new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  public onSubmit (): void {
    console.log({ isFormValid: this.heroForm.valid, value: this.heroForm.value });
    if ( this.heroForm.invalid ) return;

    if ( this.currentHero.id ) {
      this.heroService.updateHero( this.currentHero )
      .subscribe(
        hero => {
          // TODO: mostrar snackbar del heroe actualizado
          console.log(hero);
          this.showSnackbar(`${ hero.superhero } actualizado!`)
        }
      );
      return;
    }

    this.heroService.addHero( this.currentHero )
    .subscribe(
      hero => {
        // TODO: mostrar snackbar del heroe creado y redirigir heroes/edit/hero.id
        console.log(hero);
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar(`${ hero.superhero } creado!`);
      }
    );
  }

  public onConfirmDeleteHero (): void {
    if ( !this.currentHero.id ) throw Error( 'Hero id is required' );
    this.heroService.deleteHeroById(this.currentHero.id)
    .subscribe(
      isDeleted => {
        //console.log(isDeleted);
        if ( isDeleted )
          this.router.navigate(['/heroes']);
      }
    )
    this.showSnackbar(`${ this.currentHero.id } Deleted`)
  }

  public showSnackbar( message: string ): void {
    this.snackBar.open( message, 'done', { duration: 2500 } );
  }

}
