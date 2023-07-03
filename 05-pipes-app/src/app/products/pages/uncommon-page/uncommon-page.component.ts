import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name:string = 'Fernando';
  public gender: 'Male' | 'Female' = 'Male';
  public invitationMap = {
    'Male': 'Invitarlo',
    'Female': 'Invitarla'
  }

  public handleChangeClient(): void {
    this.name = 'Melissa';
    this.gender = 'Female';
  }

  // i18n Plural Pipe
  public clients: string[] = [ 'Maria', 'Pedro', 'Bryan', 'Ariel', 'Daniela', 'Cristy' ];
  public clientsMap = {
    '=0': 'No tenemos un cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    'other': 'Tenemos # clientes esperando.',
  }
  public handleDeleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Bryan',
    age: 26,
    address: 'Honduras'
  }

  // Ascyn Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( 
        (value) => console.log('tap:', value ) 
      )
  );

  public promiseValue: Promise<string> = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })
}

