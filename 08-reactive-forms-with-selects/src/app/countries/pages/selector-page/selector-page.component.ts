import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/countries.interfaces';
import { pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  constructor ( private fb: FormBuilder,  private countriesService: CountriesService ) {}

  ngOnInit(): void {
    this.onChangeRegion();
  }
  
  public myForm = this.fb.group({
    region: [ '', [ Validators.required ], [] ],
    country: [ '', [ Validators.required ], [] ],
    borders: [ '', [ Validators.required ], [] ]
  });

  get regions (): Region[] {
    return this.countriesService.regions;
  }

  public onChangeRegion (): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap( region => this.countriesService.getCountriesByRegion(region) )
    )
    .subscribe(
      region => {
        console.log({region});
      }
    );
  }
}
