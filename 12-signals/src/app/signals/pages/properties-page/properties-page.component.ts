import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { Data } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})
export class PropertiesPageComponent implements OnInit {
  public user = signal<Data>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });
  public counter = signal<number>(0);
  public fullName = computed(() => {
    if ( !this.user() ) return 'User Not Found'

    return `${ this.user().first_name } ${ this.user().last_name }`;
  });

  // esto de aqui es como el useEffect pero sin el arreglo de dependencias el se limpia solo y camina solo.
  public userChangedEffect = effect(() => {
    // TODO LO QUE ESTE AQUI DENTRO HARA QUE EL EFECTO SE DISPARE OSEA LAS SIGNALS QUE ESTEN AQUI DENTRO
    console.log(`Effect Triggered: ${ this.user().first_name } - ${ this.counter() }`);
    
    
  });

  onFieldUpdated ( field: keyof Data, value: string ): void {
    console.log({field,value});
    // this.user.set({...this.user(), [field]: value});
    this.user.mutate(current => {
      switch ( field ) {
        case 'email':
          current.email = value;
        break;
        case 'first_name':
          current.first_name = value;
        break;
        case 'last_name':
          current.last_name = value;
        break;
        case 'id':
          current.id = Number(value);
        break;
      }
    });
  }

  handleIncrement(): void {
    this.counter.update( current => current + 1 );
  }

  ngOnInit(): void {
    setInterval(() => {
      // Aqui corroboramos que se limpia solo el efecto, como ver pues estando en el link de Mutations veras el log del efecto pero al ir al contador o al user info no seguira ejecutando esto, el counter se resetea
      this.counter.update( current => current + 1 );
    },3000);
  }
}
