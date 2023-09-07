import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/countries.interfaces';
import { filter, pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];
  public borders: string[] = [];
  constructor ( private fb: FormBuilder,  private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.onChangeRegion();
    this.onChangeCountry();
  }
  
  public myForm = this.fb.group({
    region: [ '', [ Validators.required ], [] ],
    country: [ '', [ Validators.required ], [] ],
    border: [ '', [ Validators.required ], [] ]
  });

  get regions (): Region[] {
    return this.countriesService.regions;
  }

  public onChangeRegion (): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(
        () => this.myForm.get('country')?.setValue('')
      ),
      tap(
        () => this.borders = []
      ),
      switchMap( region => this.countriesService.getCountriesByRegion(region) )
    )
    .subscribe(
      countries => {
        this.countriesByRegion = countries;
      }
    );
  }

  public onChangeCountry (): void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.myForm.get('border')!.setValue('')),
      filter( (value: string) => value.length > 0 ), // como en el ngoninit se ejecutan ambas cosas ahi lo que hay si el usuario aun no a seleccionado el pais no hay alpha code entonces no hay nacesidad de ejecutar este metodo
      switchMap( (alphaCode) => this.countriesService.getBordersByAlphaCode(alphaCode) )
    )
    .subscribe(
      country => {
        console.log(country)
        this.borders = country.borders ?? [];
      }
    )
  }
}
