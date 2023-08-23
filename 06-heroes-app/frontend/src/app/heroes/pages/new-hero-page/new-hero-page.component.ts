import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'heroes-new-hero-page',
  templateUrl: './new-hero-page.component.html',
  styleUrls: ['./new-hero-page.component.scss']
})
export class NewHeroPageComponent implements OnInit {

  constructor (
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    if ( !this.router.url.includes( 'edit' ) ) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({heroId}) => this.heroService.getHeroById( heroId ) )
    )
    .subscribe(
      hero => {
        if ( !hero ){
          this.router.navigate(['/heroes']); // retornar al listado de heroes
        } else {
          this.heroForm.reset(hero);
          console.log(hero);
        }
      }
    )
  }

  public publishers = [
    { id: 'DC Comics', value: 'DC - Comics' },
    { id: 'Marvel Comics', value: 'Marvel - Comics' }
  ]

  public heroForm = new FormGroup({
    id: new FormControl<string | null>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_image: new FormControl<string >(''),
  });

  get currentHero (): Hero {
    const hero = this.heroForm.value;
    return hero as Hero;
  }

  public onSubmit(): void {
    console.log('El formulario es correcto: ', this.heroForm.valid, ', Valores:', this.heroForm.value)

    // Si el formulario no es valido
    if ( this.heroForm.invalid ) return;

    // Si en el currentHero hay un id entonces es actualizacion si no es creacion
    if ( this.currentHero.id ) {
      this.heroService.updateHeroById( this.currentHero )
      .subscribe(
        hero => {
          console.log(hero);
          // TODO: mostrar snackbar que diga heroes actualizado exitosamente y redirigir a los heroes
          this.showSnackbar( `${ hero?.superhero } updated successfully!` )
        }
      );
    } else {
      this.heroService.createHero( this.currentHero )
      .subscribe(
        hero => {
          console.log(hero);
          // TODO: mostrar snackbar que diga heroes creado exitosamente y redirigir a los heroes
          this.showSnackbar( `${ hero?.superhero } created successfully!` );
        }
      )
    }
  }

  public showSnackbar ( message: string ): void {
    this.snackBar.open( message, 'done', { duration: 2500 } );
  }

  public onConfirmDeleteHero (): void {
    if ( !this.currentHero.id ) throw new Error( 'Hero id is requied' );

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    // dialogRef.afterClosed()
    // .pipe(
    //   filter((result: boolean) => result ),
    //   switchMap(() => this.heroService.deleteHerpById( this.currentHero.id )),
    //   filter( (wasDeleted: boolean) => console.log({ wasDeleted }) ),
    // )
    // .subscribe(result => {
    //   console.log({ result });
    // });

    dialogRef.afterClosed()
    .subscribe(result => {
      console.log('The dialog was closed, result is: ' , result);
      if ( !result ) return;
      console.log('Hero Deleted!');
      this.heroService.deleteHerpById( this.currentHero.id )
      .subscribe(
        isDeleted => {
          if (isDeleted) {
            // TODO: mostrar snackbar que diga heroes eliminado exitosamente y redirigir a los heroes
            this.showSnackbar( `${ this.currentHero?.superhero } deleted successfully!` );
            this.router.navigate(['/heroes']);
          }
        }
      )
    });
  }
}
