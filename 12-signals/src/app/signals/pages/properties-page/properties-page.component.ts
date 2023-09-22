import { Component, computed, signal } from '@angular/core';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})
export class PropertiesPageComponent {
  public user = signal<Data>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed(() => {
    if ( !this.user() ) return 'User Not Found'

    return `${ this.user().first_name } ${ this.user().last_name }`;
  });
  onFieldUpdated ( field: keyof Data, value: string ): void {
    console.log({field,value});
    // this.user.set({...this.user(), [field]: value});
    this.user.mutate(current => {
      current.first_name = 'Anariba'
    });
  }
}
